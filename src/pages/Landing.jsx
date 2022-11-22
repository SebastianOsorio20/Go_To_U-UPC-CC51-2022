import React from "react";
import cs from "../assets/images/cs.jpg";
import ingCivil from "../assets/images/ingCivil.jpg";
import diseGraf from "../assets/images/diseGraf.jpg";
import testVocacional from "../assets/images/testVocacional.jpg";
import claseVirtual from "../assets/images/claseVirtual.jpg";
import psicoreu from "../assets/images/psicoreu.jpg";
import profreu from "../assets/images/profesireu.jpg";

const Landing = () => {
    return (
      <>
        <header className="main-image">
            <h1>Go To U</h1>
            <h2>Tu futuro es importante, tu futuro nos importa</h2>
            <h3>Somos una página que trata de ayudar a los jóvenes a escoger su carrera ideal</h3>
        </header>
   

        <div className="carreras">
            <div className="text-carreras">
             <h2>CARRERAS</h2>
             <h3>Encuentra aquí la información de la carrera de tu interés</h3>
            
        </div>
        <div className="image-carreras">
            <div >
                <img alt="Ciencias de la computación" src={cs}/>
                <div className="text">
                   <a href="#"> <h2>Ciencias de la Computación</h2>
                    <h3>Profundizaras en la web, la inteligencia artificial, el Big Data y más</h3></a>
                </div>
                
            </div>
            <div >
                <img  alt="Ingienería civil" src={ingCivil}/>
                <div className="text">
                    <a href="#"> <h2>Inginería Civil</h2>
                    <h3>Entenderás el proceso que conlleva edificar una casa o un rascacielos</h3></a>
                </div>
            </div>
            <div >
                <img alt="Diseño gráfico" src={diseGraf}/>
                <div className="text">
                    <a href="#"> <h2>Diseño Grafico</h2>
                    <h3>Pondrás aprueba toda tu creatividad para hacer arte en cada diseño</h3></a>
                </div> 
            </div>
            
        </div>

        <div className="opciones-test-cursos">
            <div>
                <img src={testVocacional}/>
                <h2>Test vocacional</h2>
            </div>
            <div>
                <img src={claseVirtual}/>
                <h2>Cursos introductorios a carreras</h2>
            </div>
        </div>
        <div class="orientacion">
        <div class="psicoprof">
            <img src={psicoreu}/>
            <h2>Contactate con nuestros psicólogos</h2>
            <h3>Nuestros psicólogos te brindará una mejora ayuda para llegar a tu carrera ideal</h3>
        </div>
        <div class="psicoprof">
            <img src={profreu}/>
            <h2>Contactate con nuestros profesionales de distintas carreras</h2>
            <h3>Nuestro profesionales te brindarán mas información acerca de sus carreras y te contarán sus experiencias.</h3>
        </div>
    </div>
        
    </div>
    
         </>
  );
};

export default Landing;