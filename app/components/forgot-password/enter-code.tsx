import { useActionData, useNavigation } from "@remix-run/react";

import Spinner from "../spinner";
import React from "react";

export default function EnterCode({ UserID }: { UserID: number }) {
  const action: any = useActionData();
  const navigation = useNavigation();

  const inputs: any = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];

  const handleInput = (e: any, index: number) => {
    if (e.target.value.length === e.target.maxLength) {
      e.target.value = e.target.value.toString().toUpperCase();
      inputs[index + 1]?.current.focus();
    }
  };

  return (
    <>
      <h1 className="heading">Ingrese el código de verificación</h1>
      <p className="subheading">
        Para continuar ingrese el código que ha sido enviado ha su correo
        electrónico.
      </p>
      <br />

      <section className="inputs">
        <input type="hidden" name="step" value={2} />
        <input type="hidden" name="UserID" value={UserID} />

        <p className="subheading">Código de recuperación</p>
        <div className="code">
          {inputs.map((input: any, index: number) => (
            <input
              key={index}
              type="text"
              placeholder="-"
              className="code-letter"
              ref={input}
              name={`letter${index}`}
              maxLength={1}
              onChange={(e) => {
                handleInput(e, index);
              }}
            />
          ))}
        </div>

        <p className="error">{action?.ERROR}</p>

        <div className="loading">
          <input className="button" type="submit" value="Verificar" />
          {navigation?.state !== "idle" && <Spinner />}
        </div>
      </section>
    </>
  );
}
