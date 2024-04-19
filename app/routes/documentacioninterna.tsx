import { useState, useEffect } from "react";
import { useActionData, useLoaderData } from "@remix-run/react";

import {
  getInternalDocuments,
  addInternalDocument,
  deleteInternalDocument,
} from "../services/internaldocuments.server";

import ModalMessage from "../components/modalMessage";
import InternalDocument from "../components/internaldocument";
import FormInternalDocument from "../components/formInternalDocument";
import { authenticator } from "../auth/auth.server";
import Spinner from "~/components/spinner";

export const meta = () => {
  return [
    { title: "Documentacion Interna | Grupo Sosa Morales" },
    { name: "description", content: "Plataforma de archivos Grupo Sosa Morales" },
    { charset: 'UTF-8' },
    { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ];
};

export async function loader({ request }: any) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return await getInternalDocuments();
}

export async function action({ request }: any) {
  const form = await request.formData();
  const InternalDocumentID = form.get("InternalDocumentID");
  const name = form.get("Name");
  const file = form.get("File");
  const internalFiles = await getInternalDocuments();

  const errors: any = {};
  if (request.method === "POST") {
    //Name validation
    if (name.length === 0) {
      errors.name = "El titulo del documento es obligatorio";
    }
    if (name.length > 80) {
      errors.name = "El titulo del documento no puede exceder las 80 letras";
    }
    const coincidentNames = internalFiles.filter(
      (internalFile: { Name: string }) =>
        internalFile.Name.toLowerCase() === name.toLowerCase()
    );
    if (coincidentNames.length > 0) {
      errors.name = "Ya existe un documento registrado con el nombre descrito";
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
      status: "ERROR",
      data: null,
      errors: errors,
    };
  }

  switch (request.method) {
    case "POST":
      const internalDocumentResult = await addInternalDocument(form);
      return {
        status: "INSERTED",
        data: internalDocumentResult,
        errors: {},
      };
    case "DELETE":
      const resultDeleted = await deleteInternalDocument(InternalDocumentID);
      return {
        status: "DELETED",
        data: resultDeleted,
        errors: {},
      };
  }
}

export default function Documentacioninterna() {
  const [internalDocuments, setInternalDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument]: any = useState({});

  const [showInsertedMessage, setShowInsertedMessage] = useState(false);
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);
  const [showFormDeletedMessage, setShowFormDeletedMessage] = useState(false);
  const [showFormInternalDocument, setShowFormInternalDocument] =
    useState(false);

  const loader: any = useLoaderData();
  const actionResult: any = useActionData();

  useEffect(() => {
    switch (actionResult?.status) {
      case "INSERTED":
        setShowFormInternalDocument(false);
        setShowInsertedMessage(true);
        break;
      case "DELETED":
        setShowFormDeletedMessage(false);
        setShowDeletedMessage(true);
        break;
    }
  }, [actionResult]);

  useEffect(() => {
    setInternalDocuments(loader);
  }, [loader]);

  const searchInternalDocument = (event: any) => {
    const value = event.target.value.toString().toLowerCase();
    const actualizedInternalDocuments = loader?.filter(
      (client: { Name: string }) => client.Name.toLowerCase().includes(value)
    );
    setInternalDocuments(actualizedInternalDocuments);
  };

  return (
    <div className="container">
      {showFormInternalDocument && (
        <FormInternalDocument
          method={"POST"}
          errors={actionResult?.errors}
          setShowModalInternalDocument={setShowFormInternalDocument}
        />
      )}

      {showFormDeletedMessage && (
        <ModalMessage
          features={{
            text: "¿Esta seguro de la eliminación del documento?",
            isOkCancel: true,
            indexIcon: 1,
            data: {
              name: "InternalDocumentID",
              value: selectedDocument?.InternalDocumentID,
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

      <h1 className="heading">Documentación interna</h1>
      <h2 className="subheading">
        Gestiona toda la documentacion interna del buffete
      </h2>

      <div className="top-options">
        <div className="search">
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={(event) => {
              searchInternalDocument(event);
            }}
            type="text"
            placeholder="Buscar"
          />
        </div>
      </div>

      <div className="actions">
        <button
          className="button"
          onClick={() => {
            setShowFormInternalDocument(true);
          }}
          type="button"
        >
          <img src="/img/add.svg" alt="add" />
          <p>Agregar nuevo documento</p>
        </button>
      </div>

      <div className="list-scroll">
        {internalDocuments.length > 0 ? (
          internalDocuments.map(
            (internalDocument: { InternalDocumentID: number }) => (
              <InternalDocument
                key={internalDocument?.InternalDocumentID}
                InternalDocument={internalDocument}
                setSelectedDocument={setSelectedDocument}
                setShowFormDeletedMessage={setShowFormDeletedMessage}
              />
            )
          )
        ) : loader?.length === 0 ? (
          <p className="no-found">Aún no hay documentos internos registrados</p>
        ) : loader?.length > 0 && internalDocuments.length === 0 ? (
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
