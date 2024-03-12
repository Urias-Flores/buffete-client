import CloseButton from "./close_button";
import { useEffect, useState } from "react";
import { Form, useNavigation } from "@remix-run/react";

export default function FormSubject({
  subject,
  method,
  errors = {},
  setShowModalCategory,
}: any) {
  const isSubject = Object.keys(subject).length > 0;
  const [name, setName] = useState(subject?.Name || "");
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
      setShowModalCategory(false);
    }, 300);
  };

  return (
    <div className={`modal ${beVisible ? "active" : ""}`}>
      <Form className="form" method={method} action={"/materias"}>
        <CloseButton hideModal={hideModal} />

        <h1 className="heading">
          {!isSubject ? "Agregar nueva materia" : "Modificar materia"}
        </h1>
        <h2 className="subheading">
          {!isSubject
            ? "Agregue el nombre de la materia para guardar en la lista"
            : "Realice los cambios necesarios para guardar"}
        </h2>
        <br />

        <div className="inputs">
          <div className="input">
            {isSubject && (
              <input
                type="hidden"
                name="SubjectID"
                value={subject?.SubjectID}
              />
            )}

            <label htmlFor="name">Nombre</label>
            <input
              name="Name"
              id="Name"
              type="text"
              placeholder="Escriba el nombre de la materia..."
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />

            {errors?.name ? <p className="error">{errors.name}</p> : null}
          </div>
        </div>

        <div className="loading">
          <input
            className="button"
            type="submit"
            value={isSubject ? "Modificar" : "Guardar"}
          />
          {navigation?.state !== "idle" && (
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          )}
        </div>
      </Form>
    </div>
  );
}
