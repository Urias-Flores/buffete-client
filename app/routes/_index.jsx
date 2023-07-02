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
              <img src="/img/users-group.svg" alt="image-user-group"/>
              <h4>Clientes</h4>
              <p>Gestiona tus clientes desde aqui.</p>
            </Link>

            <Link to="/categorias" className="panel">
              <img src="/img/category.svg" alt="image-user-group"/>
              <h4>Materias</h4>
              <p>Gestiona tus categorias de documentos desde aqui.</p>
            </Link>

            <Link to="/subcategorias" className="panel">
              <img src="/img/category-2.svg" alt="image-user-group"/>
              <h4>Subcategorias</h4>
              <p>Gestiona tus subcategorias desde aqui.</p>
            </Link>

            <Link to="/nosotros" className="panel">
              <img src="/img/info-octagon.svg" alt="image-user-group"/>
              <h4>A cerca de</h4>
              <p>Gestiona tus subcategorias desde aqui.</p>
            </Link>
          </div>
      </div>
  );
}
