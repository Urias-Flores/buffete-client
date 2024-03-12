import { useEffect, useState } from "react";
import { Form, useNavigation } from "@remix-run/react";

import CloseButton from "./close_button";
import Input from "./input";
import Dropdownlist from "./dropdownlist";
import Spinner from "./spinner";

export default function FormDate({
  currentUser = null,
  date = {},
  clients = [],
  users = [],
  errors = {},
  setShowFormDate,
}: any) {
  const dateID = date?.DateID;
  const [issue, setIssue] = useState("");
  const [datetime, setDatetime] = useState(new Date());

  const navigation = useNavigation();
  const [beVisible, setBevisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBevisible(true);
    }, 100);
  }, []);

  const hideModal = () => {
    setBevisible(false);
    setTimeout(() => {
      setShowFormDate(false);
    }, 300);
  };

  return (
    <div className={`modal ${beVisible ? "active" : ""}`}>
      <Form action="" method="post" className="form">
        <CloseButton hideModal={hideModal} />

        <h1 className="heading">Agregar nueva cita</h1>
        <p className="subheading">
          Agregue todos los datos para agendar una nueva cita
        </p>
        <br />

        <div className="inputs">
          <input type="hidden" value={dateID} name="DateID" />

          <Input
            title="Asunto"
            name="issue"
            type="text"
            placeholder="Asunto de la cita"
            value={issue}
            setValue={setIssue}
            error={errors?.issue}
          />

          {currentUser !== null ? (
            <input type="hidden" name="user" value={currentUser.UserID} />
          ) : (
            <Dropdownlist
              title="Abogado a cargo"
              name="user"
              items={users}
              error={errors?.user}
            />
          )}

          <Dropdownlist
            title="Cliente"
            name="client"
            items={clients}
            error={errors?.client}
          />

          <Input
            title="Fecha y hora"
            name="datetime"
            type="datetime-local"
            value={datetime}
            setValue={setDatetime}
            error={errors?.datetime}
          />
        </div>

        <div className="loading">
          <input type="submit" className="button" value="Guardar" />
          {navigation?.state !== "idle" && <Spinner />}
        </div>
      </Form>
    </div>
  );
}
