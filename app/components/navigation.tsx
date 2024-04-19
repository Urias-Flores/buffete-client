import { useState } from "react";
import { Form, Link, useLocation } from "@remix-run/react";

export default function Navigation({ user, showMenu, setShowMenu }: any) {
  const { pathname } = useLocation();
  const [showList, setShowList] = useState(false);
  const [selectedNavItems, setSelectedNavItems] = useState(0);

  return (
    <header>
      <div className="bar">
        <div className="logo-menu">
          <Link to="/">
            <img src="/img/logo-only.png" alt="logo" className="logo" />
          </Link>

          <img
            className="menu-icon"
            src="/img/menu.svg"
            alt="menu"
            onClick={() => {
              setShowMenu(!showMenu);
              setShowList(false);
            }}
          />
        </div>

        <nav className={`nav ${showMenu ? "active" : ""}`}>
          <Link
            className={`link`}
            to="/"
            onClick={() => {
              setShowMenu(false);
            }}
            onMouseEnter={() => {
              setSelectedNavItems(1);
            }}
            onMouseLeave={() => {
              setSelectedNavItems(0);
            }}
          >
            <p className="link__text">Inicio</p>
            <div
              className={`link__line ${
                pathname === "/" || selectedNavItems === 1 ? "active" : ""
              }`}
            ></div>
          </Link>

          <Link
            className={`link`}
            to="/clientes"
            onClick={() => {
              setShowMenu(false);
            }}
            onMouseEnter={() => {
              setSelectedNavItems(2);
            }}
            onMouseLeave={() => {
              setSelectedNavItems(0);
            }}
          >
            <p className="link__text">Clientes</p>
            <div
              className={`link__line ${
                pathname.includes("/clientes") || selectedNavItems === 2
                  ? "active"
                  : ""
              }`}
            ></div>
          </Link>

          {user?.AccessLevel === "A" || user?.AccessLevel === "R" ? (
            <Link
              className={`link`}
              to="/usuarios"
              onClick={() => {
                setShowMenu(false);
              }}
              onMouseEnter={() => {
                setSelectedNavItems(3);
              }}
              onMouseLeave={() => {
                setSelectedNavItems(0);
              }}
            >
              <p className="link__text"> Usuarios</p>
              <div
                className={`link__line ${
                  pathname.includes("/usuarios") || selectedNavItems === 3
                    ? "active"
                    : ""
                }`}
              ></div>
            </Link>
          ) : null}

          <Link
            className={`link`}
            to="/citas"
            onClick={() => {
              setShowMenu(false);
            }}
            onMouseEnter={() => {
              setSelectedNavItems(4);
            }}
            onMouseLeave={() => {
              setSelectedNavItems(0);
            }}
          >
            <p className="link__text">Citas</p>
            <div
              className={`link__line ${
                pathname.includes("/citas") || selectedNavItems === 4
                  ? "active"
                  : ""
              }`}
            ></div>
          </Link>

          <Link
            className={`link`}
            to="/materias"
            onClick={() => {
              setShowMenu(false);
            }}
            onMouseEnter={() => {
              setSelectedNavItems(5);
            }}
            onMouseLeave={() => {
              setSelectedNavItems(0);
            }}
          >
            <p className="link__text">Materias</p>
            <div
              className={`link__line ${
                pathname.includes("/materias") || selectedNavItems === 5
                  ? "active"
                  : ""
              }`}
            ></div>
          </Link>

          <Link
            className={`link`}
            to="/documentacioninterna"
            onClick={() => {
              setShowMenu(false);
            }}
            onMouseEnter={() => {
              setSelectedNavItems(6);
            }}
            onMouseLeave={() => {
              setSelectedNavItems(0);
            }}
          >
            <p className="link__text">Doc. Interna</p>
            <div
              className={`link__line ${
                pathname.includes("/documentacion-interna") ||
                selectedNavItems === 6
                  ? "active"
                  : ""
              }`}
            ></div>
          </Link>

          <div className="current-user">
            <img
              src="/img/user-circle.svg"
              alt="user"
              className="user"
              onClick={() => {
                setShowList(!showList);
              }}
            />

            <div className={`dropdownlist ${ showList && 'active' }`}>
              <div className="info">
                <p className="username">{user?.Name}</p>
                <p className="email">{user?.Email}</p>
              </div>

              <Form className="logout" method="post" action="/">
                <button className="button" type="submit">
                  <img src="/img/logout.svg" alt="logout" />
                  <p>Cerrar sesión</p>
                </button>
              </Form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
