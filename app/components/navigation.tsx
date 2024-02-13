import { useState } from "react";
import {Form, Link, useLocation} from "@remix-run/react";

export default function Navigation ({ user }: any){
  const { pathname } = useLocation()
  const [showList, setShowList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="bar">
        <div className="logo-menu">
          <Link to='/'>
          <img 
            src='/img/logo-only.png' 
            alt='logo' 
            className='logo'
            />
          </Link>
         
          <img 
            className='menu-icon' 
            src='/img/menu.svg' 
            alt='menu'
            onClick={ () => {
              setShowMenu(!showMenu)
            }}
          />
        </div>
        

        <nav className={`nav ${showMenu ? 'active' : ''}`}>
          <Link
            className={`link ${pathname === '/' ? 'active' : ''}`}
            to="/" 
            onClick={ () => {
              setShowMenu(false)
            }}
          >
            Inicio
          </Link>

          <Link
            className={`link ${pathname.includes('/clientes') ? 'active' : ''}`}
            to="/clientes" 
            onClick={ () => {
              setShowMenu(false)
            }}
          >
            Clientes
          </Link>

          { user?.AccessLevel === 'A' || user?.AccessLevel === 'R'
            ?
            <Link
              className={`link ${pathname.includes('/usuarios') ? 'active' : ''}`}
              to="/usuarios" 
              onClick={ () => {
                setShowMenu(false)
              }}  
            >
              Usuarios
            </Link>
            :
            null
          }

          <Link
            className={`link ${pathname.includes('/citas') ? 'active' : ''}`}
            to="/citas" 
            onClick={ () => {
              setShowMenu(false)
            }}
          >
            Citas
          </Link>

          <Link
            className={`link ${pathname.includes('/materias') ? 'active' : ''}`}
            to="/materias" 
            onClick={ () => {
              setShowMenu(false)
            }}
          >
            Materias
          </Link>

          <Link
            className={`link ${pathname === '/documentacioninterna' ? 'active' : ''}`}
            to="/documentacioninterna"
            onClick={ () => {
              setShowMenu(false)
            }}
          >
            Doc. interna
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
