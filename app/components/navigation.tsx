import { useState } from "react";
import {Form, Link, useLocation} from "@remix-run/react";

export default function Navigation ({ user }: any){
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

          { user?.AccessLevel === 'A' || user?.AccessLevel === 'R'
            ?
            <Link
              className={`link ${pathname.includes('/usuarios') ? 'active' : ''}`}
              to="/usuarios" >
              Usuarios
            </Link>
            :
            null
          }

          <Link
            className={`link ${pathname.includes('/citas') ? 'active' : ''}`}
            to="/citas" >
            Citas
          </Link>

          <Link
            className={`link ${pathname.includes('/materias') ? 'active' : ''}`}
            to="/materias" >
            Materias
          </Link>

          <Link
            className={`link ${pathname === '/documentacioninterna' ? 'active' : ''}`}
            to="/documentacioninterna">
            Documentación interna
          </Link>

          <div>
            <img src="/img/user-circle.svg" alt="user" className='user' onClick={ () => { setShowList(!showList) } }/>
            { showList &&
              <div className='dropdownlist'>
                <div className='info'>
                  <p className='username'>{ user?.Name }</p>
                  <p className='email'>{ user?.Email }</p>
                </div>

                <Form className='logout' method='post' action='/'>
                  <button className='button' type='submit'>
                    <img src="/img/logout.svg" alt="logout"/>
                    <p>Cerrar sesión</p>
                  </button>
                </Form>
              </div>
            }
          </div>
        </nav>
      </div>
    </header>
  )
}
