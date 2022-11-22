import React from "react";
import "../pages/Login.css";
import Logo1 from "../assets/images/logo1.png"
const Login=()=>{
    return(
    <>
    <div className="conteiner-nav-menu">
        <nav className="main-var">
            <a><img className="logGoToU" alt="GoToU Logo" src={Logo1}/></a>
        </nav>
    </div>
    <section className="form-main">
        <div className="form-content">
            <div className="box">
                <h2>Bienvenido</h2>
                <form action="">
                    <div className="input-box">
                        <input type="text" placeholder="Correo electronico" className="input-control"/> 
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Contraseña" className="input-control"/> 
                        <div className="input-link">
                            <a href="recuperar.html" className="gradient-text">¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>
                    <button type="submit" className="btn">Ingresar</button>
                </form>
                <p><a href="sign-up.html" className="gradient-text">Registrate</a></p>
            </div>
        </div>
        </section>
    </>
    );
}
export default Login;