import { useContext, useEffect, useState } from "react";
import {
  useActionData,
  useLoaderData,
  useOutletContext,
} from "@remix-run/react";

//Components
import FormClient from "../components/formClient.jsx";
import ModalMessage from "../components/modalMessage";
import Cliente from "../components/client";
import Spinner from "../components/spinner";

//Server actions
import {
  addClient,
  deleteClient,
  getClientByID,
  getClients,
  updateClient,
} from "../services/client.server";
import { deleteDocument } from "../services/document.server";
import { authenticator } from "../auth/auth.server";

//Styles
import styles from "../styles/clientes.css";

export const meta = () => {
  return [
    { title: "Clientes | Grupo Sosa Morales" },
    { name: "description", content: "Plataforma de archivos Grupo Sosa Morales" },
    { charset: 'UTF-8' },
    { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ];
};
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader({ request }: any) {
  const currentUser: any = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  let clients = await getClients();
  return clients.filter(
    (client: { User: { UserID: any } }) =>
      client.User.UserID === currentUser.UserID
  );
}

export async function action({ request }: any) {
  const form = await request.formData();
  const currentUser: any = await authenticator.isAuthenticated(request);
  const clients = await getClients();

  const clientID = form.get("ClientID");
  const documentID = form.get("DocumentID");
  const name = form.get("name");
  const identity = form.get("identity");
  const phone = form.get("phone");
  const email = form.get("email");
  const address = form.get("address");

  //Validation
  let errors: any = {};
  if (request.method === "POST" || request.method === "PUT") {
    if (name.length === 0) {
      errors.name = "El nombre del cliente es obligatorio";
    }
    if (name.length > 80) {
      errors.name = "El nombre debe contener menos de 80 caracteres";
    }
    if (typeof name !== "string") {
      errors.name = "El nombre debe ser un texto";
    }

    //Identity validation
    if (identity.length === 0) {
      errors.identity = "La identidad es obligatorio";
    }
    if (identity.length > 13 || identity.length < 13) {
      errors.identity = "La identidad debe contener 13 caracteres";
    }
    if (request.method === "POST") {
      const coincidentIdentities = clients.filter(
        (client: { Identity: string }) =>
          client.Identity.toLowerCase() === identity.toLowerCase()
      );
      if (coincidentIdentities.length > 0) {
        errors.identity = "Ya existe un cliente registrado con esta identidad";
      }
    }

    //Phone number validation
    if (phone.length !== 8 && phone.length !== 11) {
      errors.phone = "El numero telefónico debe contener 8 o 11 caracteres";
    }
    if (phone.length === 0) {
      errors.phone = "El numero telefónico es obligatorio";
    }
    if (request.method === "POST") {
      const coincidentPhone = clients.filter(
        (client: { Phone: string }) =>
          client.Phone.toLowerCase() === phone.toLowerCase()
      );
      if (coincidentPhone.length > 0) {
        errors.phone =
          "Ya existe un cliente registrado con este numéro telefónico";
      }
    }

    //Email validation
    if ( !email.includes('@') ){
      errors.email = "El correo electrónico ingresado no es valido"
    }
    /*const regex = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (regex.test(email)) {
      errors.email = "El correo electrónico ingresado no es valido";
    }
    
    if (email.length === 0) {
      errors.email = "El correo electrónico es obligatorio";
    }
    */
    if (request.method === "POST") {
      const coincidentEmail = clients.filter(
        (client: { Email: string }) =>
          client.Email.toLowerCase() === email.toLowerCase()
      );
      if (coincidentEmail.length > 0) {
        errors.email =
          "Ya existe un cliente registrado con este correo electrónico";
      }
    }

    //Address validation
    if (address.length === 0) {
      errors.address = "La dirección del cliente es obligatoria";
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      state: "ERROR",
      data: {},
      errors: errors,
    };
  }

  const client: any = {
    User: currentUser.UserID,
    Name: name,
    Identity: identity,
    Phone: phone,
    Email: email,
    Address: address,
  };

  switch (request.method) {
    case "POST": {
      const returnedClient = await addClient(client);
      return {
        state: "INSERTED",
        data: returnedClient,
        errors: {},
      };
    }
    case "PUT": {
      client.ClientID = parseInt(clientID);
      const returnedState = await updateClient(client);
      return {
        state: "UPDATED",
        data: returnedState,
        errors: {},
      };
    }
    case "DELETE": {
      let returnedState;
      const selectedClient = await getClientByID(clientID);
      if (
        selectedClient?.Documents.length > 0 ||
        selectedClient?.Dates.length > 0
      ) {
        return {
          state: "CLIENT HAVE DOCUMENTS",
          data: null,
          errors: {},
        };
      }

      if (clientID) {
        returnedState = await deleteClient(clientID);
        return {
          state: "CLIENT DELETED",
          data: returnedState,
          errors: {},
        };
      } else if (documentID) {
        returnedState = await deleteDocument(documentID);
        return {
          state: "DOCUMENT DELETED",
          data: returnedState,
          errors: {},
        };
      }
      return {
        state: "UNKNOWN",
        data: null,
        errors: {
          unknown: "Ha sucedido un error inesperado",
        },
      };
    }
    default: {
      throw new Error("Unexpected action");
    }
  }
}

export default function Clientes() {
  //States for forms modals
  const [isVisibleFormCliente, setVisibleFormClient] = useState(false);
  const [isVisibleFormClienteForEditing, setVisibleFormClientForEditing] =
    useState(false);
  const [isVisibleDeleteClient, setVisibleDeleteClient] = useState(false);

  //State for message modals
  const [insertedMessage, showInsertedMessage] = useState(false);
  const [updatedMessage, showUpdatedMessage] = useState(false);
  const [deleteClientMessage, showDeleteClientMessage] = useState(false);
  const [clientHaveDocumentsMessage, showClientHaveDocumentsMessage] =
    useState(false);
  const [errorSelectedMessage, showErrorSelectedMessage] = useState(false);

  //State for client and document selection
  const [clients, setClients] = useState([]);
  const [clientSelected, setClientSelected]: any = useState({});

  const loader: any = useLoaderData();
  const actionResult: any = useActionData();

  useEffect(() => {
    switch (actionResult?.state) {
      case "INSERTED":
        setVisibleFormClient(false);
        showInsertedMessage(true);
        break;
      case "UPDATED":
        setVisibleFormClientForEditing(false);
        showUpdatedMessage(true);
        break;
      case "CLIENT DELETED":
        setVisibleDeleteClient(false);
        showDeleteClientMessage(true);
        break;
      case "CLIENT HAVE DOCUMENTS":
        setVisibleDeleteClient(false);
        showClientHaveDocumentsMessage(true);
        break;
      default:
        break;
    }
  }, [actionResult]);

  useEffect(() => {
    setClients(loader);
  }, [loader]);

  const showFormCliente = (isEditing: boolean) => {
    if (isEditing) {
      if (Object.keys(clientSelected).length > 0) {
        setVisibleFormClientForEditing(true);
      } else {
        showErrorSelectedMessage(true);
      }
    } else {
      setVisibleFormClient(true);
    }
  };

  const showEliminatedClient = () => {
    if (Object.keys(clientSelected).length <= 0) {
      showErrorSelectedMessage(true);
    } else {
      setVisibleDeleteClient(true);
    }
  };

  const searchClient = (event: any) => {
    const value = event.target.value.toString().toLowerCase();
    const actualizedClients = loader?.filter((client: { Name: string }) =>
      client.Name.toLowerCase().includes(value)
    );
    setClients(actualizedClients);
  };

  return (
    <div className="container">
      {isVisibleFormCliente && (
        <FormClient
          method={"POST"}
          errors={actionResult?.errors}
          setVisibleFormClient={setVisibleFormClient}
        />
      )}

      {isVisibleFormClienteForEditing && (
        <FormClient
          method={"PUT"}
          errors={actionResult?.errors}
          client={clientSelected}
          setVisibleFormClient={setVisibleFormClientForEditing}
        />
      )}

      {isVisibleDeleteClient && (
        <ModalMessage
          features={{
            text: "¿Esta seguro de la eliminación del cliente?",
            isOkCancel: true,
            indexIcon: 1,
            data: {
              name: "ClientID",
              value: clientSelected.ClientID,
            },
          }}
          setVisibleMessage={setVisibleDeleteClient}
        />
      )}

      {errorSelectedMessage && (
        <ModalMessage
          features={{
            text: "Seleccione un cliente de la lista",
            isOkCancel: false,
            indexIcon: 0,
            data: null,
          }}
          setVisibleMessage={showErrorSelectedMessage}
        />
      )}

      {insertedMessage && (
        <ModalMessage
          features={{
            text: "El cliente ha sido ingresado exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={showInsertedMessage}
        />
      )}

      {updatedMessage && (
        <ModalMessage
          features={{
            text: "El cliente ha sido actualizado exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={showUpdatedMessage}
        />
      )}

      {deleteClientMessage && (
        <ModalMessage
          features={{
            text: "El cliente ha sido eliminado exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={showDeleteClientMessage}
        />
      )}

      {clientHaveDocumentsMessage && (
        <ModalMessage
          features={{
            text: "El cliente no ha sido eliminado ya que se encontraron datos (documentos, citas) registrados para este cliente",
            isOkCancel: false,
            indexIcon: 0,
            data: null,
          }}
          setVisibleMessage={showClientHaveDocumentsMessage}
        />
      )}

      <h1 className="heading">Clientes</h1>
      <p className="subheading">Lista completa de los clientes registrados</p>

      <div className="top-options">
        <div className="search">
          <img src="/img/search.svg" alt="search" />
          <input
            type="text"
            placeholder="Buscar"
            onChange={(event) => {
              searchClient(event);
            }}
          />
        </div>
      </div>

      <div className="actions">
        <button
          className="button"
          onClick={() => {
            showFormCliente(false);
          }}
          type="button"
        >
          <img src="/img/add.svg" alt="add" />
          <p>Agregar</p>
        </button>

        <button
          className="button"
          onClick={() => {
            showFormCliente(true);
          }}
        >
          <img src="/img/edit.svg" alt="add" />
          <p>Editar</p>
        </button>

        <button
          className="button"
          onClick={() => {
            showEliminatedClient();
          }}
          type="button"
          value="Eliminar"
        >
          <img src="/img/x.svg" alt="add" />
          <p>Eliminar</p>
        </button>
      </div>

      <div className="list-scroll">
        {clients.length > 0 ? (
          clients.map((client: { ClientID: number }) => (
            <Cliente
              key={client?.ClientID}
              client={client}
              clientSelected={clientSelected}
              setClientSelected={setClientSelected}
            />
          ))
        ) : loader?.length === 0 ? (
          <p className="no-found">Aún no hay clientes registrados</p>
        ) : loader?.length > 0 && clients.length === 0 ? (
          <p className="no-found">No se pudieron encontrar clientes</p>
        ) : (
          <div className="center">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}
