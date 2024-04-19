import { useEffect } from "react";
import { Link, useNavigate } from "@remix-run/react";

//Server
import { authenticator } from "../auth/auth.server";

//Components
import Logo from "~/components/logo";

//Styles
import styles from "~/styles/inicio.css";


export const meta = () => {
  return [
    { title: "Inicio | Grupo Sosa Morales" },
    { name: "description", content: "Welcome to Remix!" },
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

export async function loader({ request }: { request: Request }) {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
}

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container home">
      <Logo />

      <div className="panels">
        <Link to="/clientes" className="panel">
          <img src="/img/users-group.svg" alt="user-group" />
          <h4>Clientes</h4>
          <p>Gestiona tus clientes desde aqui.</p>
        </Link>

        <Link to="/citas" className="panel">
          <img src="/img/calendar-event.svg" alt="calendar" />
          <h4>Citas</h4>
          <p>Gestiona todas tus citas desde aqui.</p>
        </Link>

        <Link to="/materias" className="panel">
          <img src="/img/category.svg" alt="category" />
          <h4>Materias</h4>
          <p>Busca documentos de clientes según las materias disponibles</p>
        </Link>

        <Link to="/documentacioninterna" className="panel">
          <img src="/img/file-description.svg" alt="category-2" />
          <h4>Documentación interna</h4>
          <p>Gestiona tu documentación interna</p>
        </Link>

        <Link to="/nosotros" className="panel">
          <img src="/img/info-octagon.svg" alt="info" />
          <h4>A cerca de</h4>
          <p>Conoce mas sobre el software.</p>
        </Link>
      </div>
    </div>
  );
}
