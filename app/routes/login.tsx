import { JSX , useState } from "react";
import {Form, Link, Navigation, useLoaderData, useNavigation} from "@remix-run/react";

//Auth
import { authenticator } from '~/auth/auth.server';

//Server
import { getSession } from '~/auth/session.server';

//Components
import Input from "~/components/input";
import Spinner from "~/components/spinner";

//Other
import { json } from "@remix-run/node";

export const meta = () => {
  return [
    { title: "Acceso | Grupo Sosa Morales" },
    { name: "description", content: "Plataforma de archivos Grupo Sosa Morales" },
    { charset: 'UTF-8' },
    { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ];
};

export async function loader({ request }: { request: Request }) {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });

  const session = await getSession(request.headers.get("cookie"));
  const error = session.get(authenticator.sessionErrorKey);
  return json({ error });
}

export async function action({ request, context }: { request: Request, context: never } ) {
  console.log(context);
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/login",
    throwOnError: true,
    context,
  });
}

export default function Login(): JSX.Element {
  const navigation: Navigation = useNavigation();
  const loader = useLoaderData();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="login-modal">
      <Form className="form" method="POST">
        <h1 className="heading">Iniciar sesión</h1>
        <h2 className="subheading">
          Llena todos los campos para iniciar sesión
        </h2>
        <br />

        <div className="inputs">
          <Input
            title="Nombre de usuario o correo electronico"
            name="email"
            placeholder="Tu correo electronico"
            value={email}
            setValue={setEmail}
            error={""}
          />

          <Input
            title="Contraseña"
            name="password"
            placeholder="Tu contraseña"
            type="password"
            value={password}
            setValue={setPassword}
            error={""}
          />

          <div className="account-options">
            <Link to="/create-account" className="option">
              ¿No tienes una cuenta? Crea una
            </Link>
            <Link to="/forgot-password" className="option">
              ¿Olvidaste tu contraseña? Recuperala
            </Link>
          </div>

          <p className="error">{loader?.error?.message}</p>

          <div className="loading">
            <input className="button" type="submit" value="Iniciar Sesión" />
            {navigation?.state !== "idle" && <Spinner />}
          </div>
        </div>
      </Form>
    </main>
  );
}
