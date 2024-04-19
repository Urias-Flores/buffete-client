import { useState, useEffect } from "react";
import { useActionData, useLoaderData } from "@remix-run/react";

//Components
import FormSubject from "../components/formSubject";
import ModalMessage from "../components/modalMessage";
import Subject from "../components/subject";
import Spinner from "../components/spinner";

//Server actions
import {
  getSubjects,
  addSubject,
  updateSubject,
  deleteSubject,
  getSubjectByID,
} from "../services/subject.server";

//Styles
import clientStyle from "../styles/clientes.css";
import { authenticator } from "../auth/auth.server";

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
      href: clientStyle,
    },
  ];
}

export async function loader({ request }: any) {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return await getSubjects();
}

export async function action({ request }: any) {
  const form = await request.formData();

  const name = form.get("Name");
  const subjects = await getSubjects();

  const errors: any = {};
  if (request.method === "POST" || request.method === "PUT") {
    if (name.length === 0) {
      errors.name = "El nombre de la categoría es obligatorio";
    }
    if (name.length > 30) {
      errors.name = "El nombre no debe exceder los 30 caracteres";
    }
    const coincidentName = subjects.filter(
      (subject: { Name: string }) =>
        subject.Name.toLowerCase() === name.toLowerCase()
    );
    if (coincidentName.length > 0) {
      errors.name = "Ya existe una categoría con el nombre descrito";
    }
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "ERROR",
      errors: errors,
      data: null,
    };
  }

  const subject: any = {
    Name: name,
    User: 1,
  };

  switch (request.method) {
    case "POST":
      const insertedSubject = await addSubject(subject);
      return {
        status: "INSERTED",
        errors: {},
        data: insertedSubject,
      };
    case "PUT":
      const SubjectID = form.get("SubjectID");
      subject.SubjectID = SubjectID;
      const updatedSubject = await updateSubject(subject);
      return {
        status: "UPDATED",
        errors: {},
        data: updatedSubject,
      };
    case "DELETE":
      const SubjectIDForDelete = form.get("SubjectID");

      //Verificando que la materia no tenga documentos vinculados
      const subjectTarget = await getSubjectByID(SubjectIDForDelete);

      console.log(subjectTarget);

      if (subjectTarget?.Documents.length > 0) {
        return {
          status: "SUBJECT HAVE DOCUMENTS",
          errors: {},
          data: null,
        };
      }

      const deleteResponse = await deleteSubject(SubjectIDForDelete);

      return {
        status: "DELETED",
        errors: {},
        data: deleteResponse,
      };
    default: {
      throw new Error("Unexpected action");
    }
  }
}

export default function Materias() {
  const [subjectSelected, setSubjectSelected]: any = useState({});

  const [showModalSubject, setShowModalSubject] = useState(false);
  const [showModalSubjectForEditing, setShowModalSubjectForEditing] =
    useState(false);
  const [showModalSubjectDelete, setShowModalSubjectDelete] = useState(false);
  const [showErrorSelectedMessage, setShowErrorSelectedMessage] =
    useState(false);
  const [showErrorEliminationMessage, setShowErrorEliminationMessage] =
    useState(false);
  const [showInsertedMessage, setShowInsertedMessage] = useState(false);
  const [showUpdatedMessage, setShowUpdatedMessage] = useState(false);
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);

  const loader: any = useLoaderData();
  const actionResult: any = useActionData();

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setSubjects(loader);
  }, [loader]);

  const searchSubjects = (event: any) => {
    const value = event.target.value.toString().toLowerCase();
    const actualizedSubjects = loader?.filter((subject: { Name: string }) =>
      subject.Name.toLowerCase().includes(value)
    );
    setSubjects(actualizedSubjects);
  };

  const showFormSubject = (isEditing: boolean) => {
    if (isEditing) {
      if (Object.keys(subjectSelected).length > 0) {
        setShowModalSubjectForEditing(true);
      } else {
        setShowErrorSelectedMessage(true);
      }
    } else {
      setShowModalSubject(true);
    }
  };

  const showDeleteMessage = () => {
    if (Object.keys(subjectSelected).length > 0) {
      setShowModalSubjectDelete(true);
    } else {
      setShowErrorSelectedMessage(true);
    }
  };

  useEffect(() => {
    switch (actionResult?.status) {
      case "INSERTED":
        setShowModalSubject(false);
        setShowInsertedMessage(true);
        break;
      case "UPDATED":
        setShowModalSubjectForEditing(false);
        setShowUpdatedMessage(true);
        break;
      case "DELETED":
        setShowModalSubjectDelete(false);
        setShowDeletedMessage(true);
        break;
      case "SUBJECT HAVE DOCUMENTS":
        setShowModalSubjectDelete(false);
        setShowErrorEliminationMessage(true);
        break;
      default:
        break;
    }
  }, [actionResult]);

  return (
    <div className="container">
      {showModalSubject && (
        <FormSubject
          subject={{}}
          method={"POST"}
          errors={actionResult?.errors}
          setShowModalCategory={setShowModalSubject}
        />
      )}

      {showModalSubjectForEditing && (
        <FormSubject
          subject={subjectSelected}
          method={"PUT"}
          errors={actionResult?.errors}
          setShowModalCategory={setShowModalSubjectForEditing}
        />
      )}

      {showErrorSelectedMessage && (
        <ModalMessage
          features={{
            text: "Seleccione una materia de la lista",
            isOkCancel: false,
            indexIcon: 0,
            data: null,
          }}
          setVisibleMessage={setShowErrorSelectedMessage}
        />
      )}

      {showErrorEliminationMessage && (
        <ModalMessage
          features={{
            text: "La materia no ha sido eliminada ya que se encontraron datos (documentos) vinculados a la materia",
            isOkCancel: false,
            indexIcon: 0,
            data: null,
          }}
          setVisibleMessage={setShowErrorEliminationMessage}
        />
      )}

      {showInsertedMessage && (
        <ModalMessage
          features={{
            text: "La materia ha sido agregado exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={setShowInsertedMessage}
        />
      )}

      {showUpdatedMessage && (
        <ModalMessage
          features={{
            text: "La materia ha sido modificada exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={setShowUpdatedMessage}
        />
      )}

      {showDeletedMessage && (
        <ModalMessage
          features={{
            text: "La materia ha sido eliminada exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={setShowDeletedMessage}
        />
      )}

      {showModalSubjectDelete && (
        <ModalMessage
          features={{
            text: "¿Esta seguro de la eliminación de la materia seleccionada?",
            isOkCancel: true,
            indexIcon: 1,
            data: {
              name: "SubjectID",
              value: subjectSelected?.SubjectID,
            },
          }}
          setVisibleMessage={setShowModalSubjectDelete}
        />
      )}

      <h1 className="heading">Lista de materias</h1>
      <h2 className="subheading">
        Gestiona las listas disponibles en la plataforma creando nuevas
        materias.
      </h2>

      <div className="top-options">
        <div className="search">
          <img src="/img/search.svg" alt="search" />
          <input
            type="text"
            placeholder="Buscar"
            onChange={(event) => {
              searchSubjects(event);
            }}
          />
        </div>
      </div>

      <div className="actions">
        <button
          className="button"
          onClick={() => {
            showFormSubject(false);
          }}
          type="button"
        >
          <img src="/img/add.svg" alt="add" />
          <p>Agregar materia</p>
        </button>

        <button
          className="button"
          onClick={() => {
            showFormSubject(true);
          }}
        >
          <img src="/img/edit.svg" alt="add" />
          <p>Editar materia</p>
        </button>

        <button
          className="button"
          onClick={() => {
            showDeleteMessage();
          }}
        >
          <img src="/img/x.svg" alt="delete" />
          <p>Eliminar materia</p>
        </button>
      </div>

      <div className="list-scroll">
        {subjects.length > 0 ? (
          subjects.map((subject: { SubjectID: number }) => (
            <Subject
              key={subject.SubjectID}
              subject={subject}
              subjectSelected={subjectSelected}
              setSubjectSelected={setSubjectSelected}
            />
          ))
        ) : loader?.length === 0 ? (
          <p className="no-found">Aún no hay materias registrados</p>
        ) : loader?.length > 0 && subjects.length === 0 ? (
          <p className="no-found">No se pudieron encontrar materias</p>
        ) : (
          <div className="center">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}
