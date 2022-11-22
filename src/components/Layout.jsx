import React from "react";
import { Link, Outlet } from "react-router-dom";
import Loguito from "../assets/images/Loguito.jpeg";

function Layout() {
  return (
    <div>
      <div className="conteiner-menu-nav">
        <nav className="main-nav">
          <Link to="/"><img className="logGoToU" alt="GoToU Logo" src={Loguito} /></Link>{" "}

          <ul className="menu-nav">
            <li>
              <Link to="/carreras">Carreras</Link>
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

      <div className="contactarnos">
        <h2>Si tienes alguna duda, dejanos tu correo, nosotros nos comunicaremos contigo</h2>
        <div className="infoContac">
            <form className="contacto">
                <input type="text" name="nombre" placeholder="Nombre"/>
                <input type="text" name="email" placeholder="Correo electronico"/>
            </form>
            <button>Enviar</button>
        </div>
        
        
    </div>
    <div className="navBottom">
        <div className="mensajefin">
            <h2>Go To U</h2>
            <p>Somos una página que trata de ayudar a los jóvenes a escoger su carrera ideal</p>
        </div>
        <div className="menufin">
            <nav>
                <ul>
                    <a href="#"><li>CARRERAS</li></a>
                    <a href="#"><li>TEST</li></a>
                    <a href="index1.html" target="_blank"><li>SOBRE NOSOTROS</li></a>
                    <a href="#"><li>FAQ</li></a>
                    <a href="#"><li>REGISTRO</li></a>
                </ul>
            </nav>
        </div>
        <div className="logosfin">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-whatsapp"></i>
        </div>

    </div>
    </div>
  );
}
export default Layout;