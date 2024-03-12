import { Link, useActionData, useNavigation } from "@remix-run/react";
import Input from "../input";
import Spinner from "../spinner";
import React from "react";

export default function EnterEmail({ email, setEmail }: any) {
  const action: any = useActionData();
  const navigation = useNavigation();

  return (
    <>
      <h1 className="heading">Recupera tu cuenta</h1>
      <p className="subheading">
        Para comenzar con la recuperación de tu cuenta, ingresa tu correo
        electrónico para verificar que tu cuenta realmente existe.
      </p>
      <br />

      <div className="inputs">
        <input name="step" type="hidden" value={1} />

        <Input
          title="Correo electrónico"
          name="email"
          placeholder="Ingresa tu correo electronico"
          type="email"
          value={email}
          setValue={setEmail}
          error=""
        />

        <div className="account-options">
          <Link to="/login" className="option">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
          <Link to="/create-account" className="option">
            ¿Aun no tiene una cuenta? Crea una nueva
          </Link>
        </div>

        <p className="error">{action?.ERROR}</p>

        <div className="loading">
          <input className="button" type="submit" value="Verificar" />
          {navigation?.state !== "idle" && <Spinner />}
        </div>
      </div>
    </>
  );
}
