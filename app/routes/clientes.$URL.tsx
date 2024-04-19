import { useEffect, useState } from "react";
import { useActionData, useLoaderData } from "@remix-run/react";

//Components
import SelectSubject from "../components/selectSubject";
import FormDocument from "../components/formDocument";
import ModalMessage from "../components/modalMessage";

//Server actions
import { addDocument, deleteDocument } from "../services/document.server";
import { getSubjects } from "../services/subject.server";
import { getClients } from "../services/client.server";
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

export async function loader({ params, request }: any) {
  const currentUser = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { URL } = params;
  const clients = await getClients();
  const client = clients.filter((value: { URL: any }) => value.URL === URL);
  if (client.length === 0) {
    throw new Error("Cliente no encontrado");
  }

  const subjects = await getSubjects();
  return {
    client,
    subjects,
    currentUser,
  };
}

export async function action({ request }: any) {
  const documentFormData = await request.formData();
  const documentID = documentFormData.get("DocumentID");
  const name = documentFormData.get("Name");
  const subject = documentFormData.get("Subject");
  const file = documentFormData.get("File");

  const errors: any = {};
  if (request.method === "POST") {
    if (name.length === 0) {
      errors.name = "El titulo del documento es obligatorio";
    }
    if (name.length > 30) {
      errors.name = "El titulo del documento no debe exceder las 30 letras";
    }
    if (parseInt(subject) === -1) {
      errors.subject = "La selección de una materia es obligatoria";
    }
    //File validation
    if (file.size === 0) {
      errors.file = "Debe seleccionar un documento";
    }

    if (file.type !== "application/pdf") {
      errors.file = "El archivo seleccionado debe ser del formato PDF";
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      state: "ERROR",
      data: null,
      errors: errors,
    };
  }

  switch (request.method) {
    case "POST": {
      try {
        const returnedDocument = await addDocument(documentFormData);
        return {
          state: "INSERTED",
          data: returnedDocument,
          errors: {},
        };
      } catch (error) {
        return {
          state: "ERROR",
          data: null,
          errors: {},
        };
      }
    }
    case "DELETE": {
      const returnedState = await deleteDocument(documentID);
      return {
        state: "DELETED",
        data: returnedState,
        errors: {},
      };
    }
    default: {
      throw new Error("Unexpected action");
    }
  }
}

export default function ClientesClientID() {
  const { client, subjects, currentUser }: any = useLoaderData();
  const actionResult: any = useActionData();
  const { ClientID, Name, Identity, Email, Phone, Address, Documents } =
    client[0];

  const [showSubject, setShowSubject] = useState(false);
  const [showGeneralInformation, setShowGeneralInformation] = useState(false);

  const [showInsertedMessage, setShowInsertedMessage] = useState(false);
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);
  const [showFormDocument, setShowFormDocument] = useState(false);
  const [showFormDeletedMessage, setShowFormDeletedMessage] = useState(false);

  const [selectedDocument, setSelectedDocument]: any = useState({});

  const subjectsNamed: any = {};
  subjects.forEach((subject: { SubjectID: string | number; Name: any }) => {
    subjectsNamed[subject.SubjectID] = subject.Name;
  });

  let record: any = [];
  Documents.forEach((document: { Subject: string | number }) => {
    let subjectExist = false;
    record.forEach((item: { SubjectID: string | number; Documents: any[] }) => {
      if (document?.Subject === item.SubjectID) {
        item.Documents = [...item.Documents, document];
        subjectExist = true;
      }
    });
    if (!subjectExist) {
      record.push({
        SubjectID: document?.Subject,
        Name: subjectsNamed[document?.Subject],
        Documents: [document],
      });
    }
  });

  useEffect(() => {
    switch (actionResult?.state) {
      case "INSERTED":
        setShowFormDocument(false);
        setShowInsertedMessage(true);
        break;
      case "DELETED":
        setShowFormDeletedMessage(false);
        setShowDeletedMessage(true);
        break;
      default:
        break;
    }
  }, [actionResult]);

  return (
    <div className="container">
      {showFormDocument && (
        <FormDocument
          method={"POST"}
          errors={actionResult?.errors}
          subjects={subjects}
          ClientID={ClientID}
          UserID={currentUser?.UserID}
          setShowModalDocument={setShowFormDocument}
        />
      )}

      {showFormDeletedMessage && (
        <ModalMessage
          features={{
            text: "¿Esta seguro de la eliminación del documento?",
            isOkCancel: true,
            indexIcon: 1,
            data: {
              name: "DocumentID",
              value: selectedDocument?.DocumentID,
            },
          }}
          setVisibleMessage={setShowFormDeletedMessage}
        />
      )}

      {showInsertedMessage && (
        <ModalMessage
          features={{
            text: "El documento ha sido agregado exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={setShowInsertedMessage}
        />
      )}

      {showDeletedMessage && (
        <ModalMessage
          features={{
            text: "El documento ha sido eliminado exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={setShowDeletedMessage}
        />
      )}

      <h1 className="heading">Información del cliente</h1>
      <h2 className="subheading">
        Información general y expediente completo del cliente
      </h2>

      <main className="grid-1-2">
        <section
          className="content"
          onClick={() => {
            setShowGeneralInformation(!showGeneralInformation);
          }}
        >
          <h3>Información general</h3>
          <div className={`data ${showGeneralInformation ? "active" : ""}`}>
            <div className="item">
              <p>Nombre:</p>
              <b>{Name}</b>
            </div>
            <div className="item">
              <p>Identidad:</p>
              <b>{Identity}</b>
            </div>
            <div className="item">
              <p>Correo Electrónico:</p>
              <b>{Email}</b>
            </div>
            <div className="item">
              <p>Telefóno:</p>
              <b>{Phone}</b>
            </div>
            <div className="item">
              <p>Dirección:</p>
              <b>{Address}</b>
            </div>
          </div>
        </section>

        <section className="record">
          <h3 className="record-title">Expediente</h3>

          <div className="actions">
            <button
              className="button"
              onClick={() => {
                setShowFormDocument(true);
              }}
              type="button"
            >
              <img src="/img/add.svg" alt="add" />
              <p>Agregar documento</p>
            </button>
          </div>

          <div className="list-scroll">
            {record.length === 0 ? (
              <p className="no-found">Aun no hay documentos disponibles...</p>
            ) : (
              record.map((subject: { SubjectID: number }) => (
                <SelectSubject
                  key={subject.SubjectID}
                  subject={subject}
                  showSubject={showSubject}
                  setShowSubject={setShowSubject}
                  setShowFormDeletedMessage={setShowFormDeletedMessage}
                  setSelectedDocument={setSelectedDocument}
                />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
