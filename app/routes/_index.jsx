import {useEffect} from "react";
import {Link, useNavigate} from "@remix-run/react";

import Logo from '../components/logo';

import styles from '../styles/inicio.css';
import {authenticator} from "../auth/auth.server";

export const meta = () => {
  return [
    { title: "Inicio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({ request }){
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
}

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if(!token){
      navigate('/login');
    }
  }, []);


  return (
    <div className="container home">
      <Logo/>

      <div className="panels">
        <Link to="/clientes" className="panel">
          <img src="/img/users-group.svg" alt="user-group"/>
          <h4>Clientes</h4>
          <p>Gestiona tus clientes desde aqui.</p>
        </Link>

        <Link to="/citas" className="panel">
          <img src="/img/calendar-event.svg" alt="calendar"/>
          <h4>Citas</h4>
          <p>Gestiona todas tus citas desde aqui.</p>
        </Link>

        <Link to="/materias" className="panel">
          <img src="/img/category.svg" alt="category"/>
          <h4>Materias</h4>
          <p>Busca documentos de clientes según las materias disponibles</p>
        </Link>

        <Link to="/documentacioninterna" className="panel">
          <img src="/img/file-description.svg" alt="category-2"/>
          <h4>Documentación interna</h4>
          <p>Gestiona tu documentación interna</p>
        </Link>

        <Link to="/nosotros" className="panel">
          <img src="/img/info-octagon.svg" alt="info"/>
          <h4>A cerca de</h4>
          <p>Conoce mas sobre el software.</p>
        </Link>
      </div>
    </div>
  );
}
