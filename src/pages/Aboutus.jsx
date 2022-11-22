import React from "react";
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
import Loguito from "../assets/images/Loguito.jpeg";
import Dani from "../assets/images/Daniel Velarde.jpeg";
import Andrea from "../assets/images/Andrea.jpeg";
import Diego from "../assets/images/Diego.jpeg";
import Marlon from "../assets/images/Marlon.jpeg";
import Sebastian from "../assets/images/Sebastian.jpeg";
const AboutUs = () => {
  return (
    <>
    
        <section className="Gotou">
            <img className="Logo_about" src={Loguito} alt="GoToU Logo"/>
              <div className="parrafo1">
                <h1>Sobre Go To U</h1>
                <p id="p1">Bienvenido a GoToU, somos una página enfocada en tratar de apoyarte</p>
                <p id="p1">con cualquier duda que tengas respecto a tu futura carrera profesional.</p>
                <p id="p1">Somos un grupo de estudiantes que pensamos en esta idea, ya que varios </p>
                <p id="p1">pasamos por lo mismo en algún momento de nuestra vida.</p>
              </div>
        </section>

      <section className="Participantes">
            <h1 className="t1">Nuestros Creadores</h1>
            <div className="Integrantes">
                <div className="creador">
                    <img alt= "Daniel" src={Dani}/>
                    <div className="texto_integrantes">
                        <p>Fundador</p>
                        <h3>Daniel Velarde</h3>
                        <ul className="Redes_Sociales">
                            <li className="Boton_RS"><a href="#" class="fa fa-facebook"></a></li>
                            <li className="Boton_RS"><a href="#" class="fa fa-twitter"></a></li>
                        </ul>
                    </div>    
                </div>
                <div className="creador">
                    <img alt="Andrea" src={Andrea}/>
                    <div className="texto_integrantes">
                        <p>Fundador</p>
                        <h3>Andrea Garcia</h3>
                        <ul className="Redes_Sociales">
                            <li className="Boton_RS"><a href="#" className="fa fa-facebook"></a> <i className="fa fa-facebook"></i></li>
                            <li className="Boton_RS"><a href="#" className="fa fa-twitter"></a></li>
                        </ul>
                    </div>    
                </div>
                <div className="creador">
                    <img alt= "Diego" src={Diego}/>
                    <div className="texto_integrantes"/>
                        <p>Fundador</p>
                        <h3>Diego Lucana</h3>
                        <ul className="Redes_Sociales">
                            <li className="Boton_RS"><a href="#" className="fa fa-facebook"></a></li>
                            <li className="Boton_RS"><a href="#" className="fa fa-twitter"></a></li>
                        </ul>
                    </div>    
                </div>
                <div className="creador">
                    <img alt="Marlon Foto" src={Marlon}/>
                    <div className="texto_integrantes">
                        <p>Fundador</p>
                        <h3>Marlon Llaguento</h3>
                        <ul className="Redes_Sociales">
                            <li className="Boton_RS"><a href="#" className="fa fa-facebook"></a></li>
                            <li className="Boton_RS"><a href="#" className="fa fa-twitter"></a></li>
                        </ul>
                    </div>    
                </div>
                <div className="creador">
                    <img alt="Sebastian"src={Sebastian}/>
                    <div className="texto_integrantes">
                        <p>Fundador</p>
                        <h3>Sebastian Osorio</h3>
                        <ul className="Redes_sociales">
                            <li className="Boton_RS"><a href="#" className="fa fa-facebook"></a></li>
                            <li className="Boton_RS"><a href="#" className="fa fa-twitter"></a></li>
                        </ul>
                    </div>    
                </div>            
        </section> 


    </>
  );
};

export default AboutUs;