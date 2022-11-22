import React from "react";
import { Link, Outlet } from "react-router-dom";
import Loguito from "../assets/images/Loguito.jpeg";

function Layout() {
  return (
    <div>
      <div className="conteiner-menu-nav">
        <nav className="main-nav">
          <img className="logGoToU" alt="GoToU Logo" src={Loguito} />

          <ul className="menu-nav">
            <li>
              <Link to="/">Carreras</Link>{" "}
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/sobre-nosotros">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/iniciar-sesion">Iniciar sesión</Link>
            </li>
          </ul>
        </nav>

        <hr />
      </div>
      <Outlet />
    </div>
  );
}
export default Layout;