import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Inicio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div className="container home">
        <p className="title">Grupo Sosa Morales</p>
        <p className="subtitle">Notaria - Abogacia - Asesoria - Bienes raices</p>

          <div className="panels">
            <Link to="/clientes" className="panel">
              <img src="/img/users-group.svg" alt="user-group"/>
              <h4>Clientes</h4>
              <p>Gestiona tus clientes desde aqui.</p>
            </Link>

            <Link to="/materias" className="panel">
              <img src="/img/category.svg" alt="category"/>
              <h4>Materias</h4>
              <p>Busca documentos de clientes según las materias disponibles</p>
            </Link>

            <Link to="/documentacioninterna" className="panel">
              <img src="/img/category-2.svg" alt="category-2"/>
              <h4>Documentación interna</h4>
              <p>Gestiona tu documentación interna</p>
            </Link>

            <Link to="/nosotros" className="panel">
              <img src="/img/info-octagon.svg" alt="info"/>
              <h4>A cerca de</h4>
              <p>Gestiona tus subcategorias desde aqui.</p>
            </Link>
          </div>
      </div>
  );
}
