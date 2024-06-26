import { useState, useEffect } from "react";
import { useActionData, useLoaderData } from "@remix-run/react";

//Components
import Document from "../components/document";
import ModalMessage from "../components/modalMessage";
import Spinner from "../components/spinner";

//Server Actions
import { deleteDocument } from "../services/document.server";
import { formattedDate } from "../utils/helpers";

//Styles
import stylesSubject from "../styles/materias.css";
import stylesClient from "../styles/clientes.css";
import { authenticator } from "../auth/auth.server";
import { getSubjects } from "../services/subject.server";

export const meta = () => {
  return [
    { title: "Materias | Grupo Sosa Morales" },
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
      href: stylesSubject,
    },
    {
      rel: "stylesheet",
      href: stylesClient,
    },
  ];
}

export async function loader({ params, request }: any) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const { name } = params;

  const subjects = await getSubjects();
  const selectedSubject = subjects.filter(
    (subject: { Name: string }) => subject.Name.trim() === name
  );

  if (selectedSubject.length === 0) {
    throw new Error("Nombre de materia no valido");
  }

  return selectedSubject[0];
}

export async function action({ request }: any) {
  const form = await request.formData();
  const DocumentID = form.get("DocumentID");

  switch (request.method) {
    case "DELETE":
      const resultData = await deleteDocument(DocumentID);
      return {
        status: "DELETED",
        data: resultData,
        errors: {},
      };
    default:
      throw new Error("Unexpected action");
  }
}

export default function MateriasName() {
  const loader: any = useLoaderData();
  const actionResult: any = useActionData();

  const [showFormDeletedMessage, setShowFormDeletedMessage] = useState(false);
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);
  const [selectedDocument, setSelectedDocument]: any = useState({});

  const { Name, Documents, CreatedDate, UpdatedDate }: any = loader;
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    switch (actionResult?.status) {
      case "DELETED":
        setShowFormDeletedMessage(false);
        setShowDeletedMessage(true);
        break;
      default:
        break;
    }
  }, [actionResult]);

  useEffect(() => {
    setDocuments(loader?.Documents);
  }, [loader]);

  const searchDocument = (event: any) => {
    const value = event.target.value.toString().toLowerCase();
    const actualizedDocuments = loader?.Documents.filter(
      (document: { Name: string }) =>
        document.Name.toLowerCase().includes(value)
    );
    setDocuments(actualizedDocuments);
  };

  return (
    <div className="container">
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

      <h1 className="heading">Informacion de la materia</h1>
      <h2 className="subheading">
        Gestiona aqui todos los documentos de la materia
      </h2>

      <main className="grid-1-2">
        <section className="content">
          <h3>Información general</h3>
          <div className="data">
            <div className="item">
              <p>Nombre:</p>
              <b>{Name}</b>
            </div>

            <div className="item">
              <p>Numero de documentos:</p>
              <b>{Documents.length}</b>
            </div>

            <div className="item">
              <p>Fecha de creación:</p>
              <b>{formattedDate(CreatedDate)}</b>
            </div>

            <div className="item">
              <p>Ultima modificación:</p>
              <b>{formattedDate(UpdatedDate)}</b>
            </div>
          </div>
        </section>

        <section className="documents">
          <h3 className="documents-title">Documentos registrados</h3>

          <div className="search">
            <img src="/img/search.svg" alt="search" />
            <input
              type="text"
              placeholder="Buscar..."
              onChange={(event) => {
                searchDocument(event);
              }}
            />
          </div>

          <div className="list-scroll">
            {Object.keys(loader).length === 0 ? (
              <div className="center">
                <Spinner />
              </div>
            ) : documents.length === 0 ? (
              <p className="no-found">Aun no hay documentos disponibles...</p>
            ) : (
              documents.map((document: { DocumentID: number }) => (
                <Document
                  key={document.DocumentID}
                  document={document}
                  setSelectedDocument={setSelectedDocument}
                  setShowFormDeletedMessage={setShowFormDeletedMessage}
                />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
