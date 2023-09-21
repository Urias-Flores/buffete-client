import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";

// eslint-disable-next-line no-empty-pattern
export default function Navigation ({}){

  const { pathname } = useLocation()
  const [showList, setShowList] = useState(false);

  return (
    <header>
      <div className="bar">
        <Link to='/'>
          <img src='/img/logo-only.png' alt='logo' className='logo'/>
        </Link>

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
            className={`link ${pathname.includes('/materias') ? 'active' : ''}`}
            to="/materias" >
            Materias
          </Link>
          <Link
            className={`link ${pathname === '/documentacioninterna' ? 'active' : ''}`}
            to="/documentacioninterna" >
            Documentación interna
          </Link>

          <div>
            <img src="/img/user-circle.svg" alt="user" className='user' onClick={ () => { setShowList(!showList) } }/>
            { showList &&
              <div className='dropdownlist'>
                <div className='info'>
                  <p className='username'>Administrator user</p>
                  <p className='email'>correo@correo.com</p>
                </div>

                <Link to='login' className='logout'>
                  <img src="/img/logout.svg" alt="logout"/>
                  <p className='close'>Cerrar sesión</p>
                </Link>
              </div>
            }
          </div>
        </nav>
      </div>
    </header>
  )
}
