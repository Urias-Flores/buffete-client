import { useState } from "react";
import { useLoaderData } from "@remix-run/react";

//Components
import Select from "../components/select";

//Server actions
import { getClients } from "../services/client.server";
import { getUsers } from "../services/user.server";

//Styles
import styles from "../styles/clientes.css";

export const meta = () => {
  return [
    { title: "Usuarios | Grupo Sosa Morales" },
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

export async function loader({ params }: any) {
  const { URL } = params;
  const users = await getUsers();
  const selectedUser = users.filter(
    (user: { URL: string }) => user.URL === URL
  )[0];
  const clients = await getClients();
  return {
    Clients: clients.filter(
      (client: { User: { UserID: number } }) =>
        client.User.UserID === selectedUser.UserID
    ),
    User: selectedUser,
  };
}

export default function UsuariosURL() {
  const [showClients, setShowClients] = useState();
  const [showDocuments, setShowDocuments] = useState();

  const loader: any = useLoaderData();

  const { Name, Email, Phone, State, AccessLevel, Clients, Documents } =
    loader?.User;

  const accessLevel: any = {
    A: "Usuario administrador",
    R: "Usuario raíz",
    N: "Usuario común",
  };

  return (
    <div className="container">
      <h1 className="heading">Información del usuario</h1>
      <h2 className="subheading">
        Información general y otros datos sobre el usuario
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
              <p>Correo Electrónico:</p>
              <b>{Email}</b>
            </div>
            <div className="item">
              <p>Teléfono:</p>
              <b>{Phone}</b>
            </div>
            <div className="item">
              <p>Nivel del acceso:</p>
              <b>{accessLevel[AccessLevel]}</b>
            </div>
            <div className="item">
              <p>Estado actual:</p>
              <div className="state">
                <div className={`point ${State === 1 ? "active" : ""}`}></div>
                <b>{State === 1 ? "Habilitado" : "Inhabilitado"}</b>
              </div>
            </div>
          </div>
        </section>

        <section className="record">
          <h3 className="record-title users">Otra información</h3>

          <div className="list-scroll">
            <Select
              id={1}
              title={"Clientes"}
              items={Clients}
              urlPrefix={"clientes"}
              showSelect={showClients}
              setShowSelect={setShowClients}
            />

            <Select
              id={2}
              title={"Documentos"}
              items={Documents}
              type="BUTTON"
              urlPrefix={"documentos"}
              showSelect={showDocuments}
              setShowSelect={setShowDocuments}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
