import { JSX, useEffect, useState } from 'react';
import { useActionData, useLoaderData } from "@remix-run/react";

//server
import { authenticator } from '~/auth/auth.server';
import { getClients } from '~/services/client.server';
import { getUsers } from '~/services/user.server';
import {
  addDate,
  getAllDates,
  updateDate,
  deleteDate,
} from "../services/date.server";

//models
import Response from "~/models/response";
import DateEntity from "~/models/date";
import UserEntity from "~/models/user";

//components
import FormDate from "../components/formDate";
import ComponentDate from "../components/date";
import ModalMessage from "../components/modalMessage";

//styles
import dateStyles from "~/styles/citas.css";
import ClientEntity from "~/models/client";

export const meta = () => {
  return [
    { title: "Citas | Grupo Sosa Morales" },
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
      href: dateStyles,
    },
  ];
}

export async function loader({ request }: never): Promise<{ clients: ClientEntity[], users: UserEntity[], dates: DateEntity[], currentUser: UserEntity }> {
  const currentUser: UserEntity = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  }) as UserEntity;

  const clients = await getClients();
  const users = await getUsers();
  let dates: DateEntity[] = await getAllDates();

  if (currentUser?.AccessLevel === "N") {
    dates = dates.filter(
      (date: DateEntity): boolean =>
        date.User.UserID === currentUser.UserID
    );
  }

  return {
    clients,
    users,
    dates,
    currentUser,
  };
}

export async function action({ request }: { request: Request } ) {
  const currentUser: UserEntity = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  }) as UserEntity;

  const form: FormData = await request.formData();
  const issue: string = form.get("issue") as string;
  const user: string = form.get("user") as string;
  const client: string = form.get("client") as string;
  const formDateTime: string = form.get("datetime") as string;
  const datetime: Date = new Date(formDateTime);

  const errors: {
    issue: string;
    user: string;
    client: string;
    datetime: string;
  } = {};

  if (request.method === "POST") {
    if (issue?.length === 0) {
      errors.issue = "Es necesario agregar un asunto a la cita";
    }
    if (currentUser.AccessLevel === "A" || currentUser.AccessLevel === "R") {
      if (parseInt(user) === -1) {
        errors.user = "Debe seleccionar un usuario";
      }
    }
    if (parseInt(client) === -1) {
      errors.client = "Debe seleccionar un cliente";
    }
    if (datetime.toString() === 'Invalid Date') {
      errors.datetime = 'La fecha seleccionada no es valida'
    }
    if (datetime < new Date()) {
      errors.datetime =
        "La fecha seleccionada no puede ser menor que la fecha actual";
    }
  }

  if (Object.keys(errors).length > 0) {
    return new Response({ STATUS: 'ERROR', DATA: {}, ERRORS: errors });
  }

  if (request.method === "POST") {
    const insertedDate = {
      Issue: issue,
      User: user,
      Client: client,
      DateTime: datetime,
      State: "P",
    };

    const resultDate = await addDate(insertedDate);

    return new Response({
      STATUS: "INSERTED",
      DATA: resultDate,
      ERRORS: {}
    });
  } else if (request.method === "PUT") {
    const dateID = form.get("DateID");
    const currentState = form.get("State");

    const updatedDate = {
      DateID: dateID,
      State: currentState === "P" ? "R" : "P",
    };

    const updateResultDate = await updateDate(updatedDate);

    return new Response({
      STATUS: "UPDATED",
      DATA: updateResultDate,
      ERRORS: {}
    });
  } else if (request.method === "DELETE") {
    const DateID = form.get("DateID");

    const deleteResult = await deleteDate(DateID);
    return new Response({
      STATUS: "DELETED",
      DATA: deleteResult,
      ERRORS: {}
    });
  } else {
    throw new Error("Invalid option");
  }
}

export default function Citas(): JSX.Element {
  const action: Response = useActionData() as Response;
  const loader = useLoaderData();

  //Modals states
  const [showInsertedMessage, setShowInsertedMessage] = useState(false);
  const [showFormDate, setShowFormDate] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);
  const [showErrorDeleteMessage, setShowErrorDeleteMessage] = useState(false);

  //Filter states
  const [dateType, setDateType] = useState("");
  const [dateTime, setDateTime] = useState(getCurrentDate());
  const [issue, setIssue] = useState("");

  const [selectedDate, setSelectedDate] = useState({});
  const [dates, setDates] = useState([]);

  useEffect(() => {
    switch (action?.STATUS) {
      case "INSERTED":
        setShowFormDate(false);
        setShowInsertedMessage(true);
        break;
      case "DELETED":
        setShowDeleteMessage(false);
        setShowDeletedMessage(true);
        break;
    }
  }, [action]);

  useEffect(() => {
    setDates(loader?.dates);
  }, [loader]);

  useEffect(() => {
    if (dateType.length > 0) {
      setDates(
        loader?.dates.filter(
          (date: DateEntity) => {
            return (
              date.State === dateType &&
              date.DateTime?.split("T")[0] === dateTime &&
              date.Issue.toLowerCase().includes(issue.toLowerCase())
            );
          }
        )
      );
    } else {
      setDates(
        loader?.dates.filter(
          (date: DateEntity): boolean =>
            date.DateTime.split("T")[0] === dateTime
        )
      );
    }
  }, [dateType, dateTime, issue, loader?.dates]);

  function getCurrentDate(): string {
    const currentDate: Date = new Date();
    const adjustedDate: Date = new Date(
      currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
    );
    return adjustedDate.toISOString().split("T")[0];
  }

  function showEliminatedDate(): void {
    if (Object.keys(selectedDate).length === 0 || !selectedDate?.DateID) {
      setShowErrorDeleteMessage(true);
    } else {
      setShowDeleteMessage(true);
    }
  }

  return (
    <>
      {showFormDate && (
        <FormDate
          currentUser={
            loader?.currentUser.AccessLevel !== "N" ? null : loader?.currentUser
          }
          clients={loader?.clients}
          users={loader?.users}
          setShowFormDate={setShowFormDate}
          errors={action?.ERRORS}
        />
      )}

      {showInsertedMessage && (
        <ModalMessage
          features={{
            text: "La cita ha sido agregada exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={setShowInsertedMessage}
        />
      )}

      {showDeleteMessage && (
        <ModalMessage
          features={{
            text: "¿Esta seguro de la eliminación del cliente?",
            isOkCancel: true,
            indexIcon: 1,
            data: {
              name: "DateID",
              value: selectedDate?.DateID,
            },
          }}
          setVisibleMessage={setShowDeleteMessage}
        />
      )}

      {showDeletedMessage && (
        <ModalMessage
          features={{
            text: "La cita ha sido eliminada exitosamente",
            isOkCancel: false,
            indexIcon: 2,
            data: null,
          }}
          setVisibleMessage={setShowDeletedMessage}
        />
      )}

      {showErrorDeleteMessage && (
        <ModalMessage
          features={{
            text: "Debe seleccionar una cita para ser eliminada",
            isOkCancel: false,
            indexIcon: 1,
            data: null,
          }}
          setVisibleMessage={setShowErrorDeleteMessage}
        />
      )}

      <div className="container">
        <h1 className="heading">Citas</h1>
        <p className="subheading">Aquí veras todas las citas</p>

        <div className="top-options">
          <div className="search">
            <img src="/img/search.svg" alt="search" />
            <input
              type="text"
              placeholder="Buscar"
              value={issue}
              onChange={(event) => {
                setIssue(event.target.value);
              }}
            />
          </div>

          <div className="input">
            <select
              name="state"
              id="state"
              onChange={(evt) => {
                setDateType(evt.target.value);
              }}
            >
              <option value="">-- Todas las citas --</option>
              <option value="P">Pendiente</option>
              <option value="R">Realizada</option>
            </select>
          </div>

          <div className="input">
            <input
              type="date"
              value={dateTime.toString()}
              onChange={(evt) => {
                setDateTime(evt.target.value);
              }}
            />
          </div>
        </div>

        <div className="actions">
          <button
            className="button"
            onClick={() => {
              setShowFormDate(true);
            }}
            type="button"
          >
            <img src="/img/add.svg" alt="add" />
            <p>Agregar</p>
          </button>

          <button
            className="button"
            onClick={() => {
              showEliminatedDate();
            }}
            type="button"
            value="Eliminar"
          >
            <img src="/img/x.svg" alt="add" />
            <p>Eliminar</p>
          </button>
        </div>

        {dates.length > 0 ? (
          <div className="list-scroll">
            <section className="dates">
              {dates.map((date, index) => (
                <ComponentDate
                  key={index}
                  index={index}
                  date={date}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              ))}
            </section>
          </div>
        ) : loader?.dates.length > 0 ? (
          <p className="no-found">No se encontraron citas</p>
        ) : (
          <p className="no-found">Aun no hay citas registradas</p>
        )}
      </div>
    </>
  );
}
