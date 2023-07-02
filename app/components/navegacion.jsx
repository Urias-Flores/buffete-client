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
            className="link"
            to="/" >
            Inicio
          </Link>
          { pathname !== '/'
            ?
            (
              <>
                <Link
                  className="link"
                  to="/clientes" >
                  Clientes
                </Link>
                <Link
                  className="link"
                  to="/materias" >
                  Materias
                </Link>
                <Link
                  className="link"
                  to="/documentacioninterna" >
                  Documentación interna
                </Link>
              </>
            )
            : null
          }
        </nav>
      </div>
    </header>
  )
}
