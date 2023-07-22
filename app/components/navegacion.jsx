import {Link, useLocation} from "@remix-run/react";

// eslint-disable-next-line no-empty-pattern
export default function Navegacion ({}){

  const { pathname } = useLocation()

  return (
    <header>
      <div className="bar">
        <h2 className="logo">Logo</h2>
        <nav className="nav">
          <Link
            className={`link ${pathname === '/' ? 'active' : ''}`}
            to="/" >
            Inicio
          </Link>
          <Link
            className={`link ${pathname.includes('/clientes') ? 'active' : ''}`}
            to="/clientes" >
            Clientes
          </Link>
          <Link
            className={`link ${pathname === '/materias' ? 'active' : ''}`}
            to="/materias" >
            Materias
          </Link>
          <Link
            className={`link ${pathname === '/documentacioninterna' ? 'active' : ''}`}
            to="/documentacioninterna" >
            Documentación interna
          </Link>
        </nav>
      </div>
    </header>
  )
}
