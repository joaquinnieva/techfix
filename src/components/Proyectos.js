import React from "react";
import "./styles/Proyectos.css";
import images from "./images";

const Proyectos = () => (
  <>
    <div className="container-proyectos">
      <h3 className="proyectos-title">Portafolio</h3>

      <div className="cont-proyectoscard">
        <a className="proyectoscard pro1" href="#inicio">
          <img className="proyectoscard-img" src={images.proyecto1} />
          <a className="card-link" href="#inicio">
            <div className="card-hover">
              <h3 className="card-hover-text">"Portafolio JN"</h3>
              <h4 className="card-hover-text">Ver más</h4>
            </div>
          </a>
        </a>
        <a className="proyectoscard pro2" href="https://joaquinnieva.github.io/ecommerce-proyecto/" target="_blank">
          <img className="proyectoscard-img" src={images.proyecto2} />
          <a className="card-link" href="https://joaquinnieva.github.io/ecommerce-proyecto/" target="_blank">
            <div className="card-hover">
              <h3 className="card-hover-text">"ecommerce"</h3>
              <h4 className="card-hover-text">Ver más</h4>
            </div>
          </a>
        </a>
        <a className="proyectoscard pro3"></a>
      </div>
    </div>
  </>
);

export default Proyectos;
