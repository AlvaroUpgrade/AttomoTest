import React from "react";
import Separator from "../Separator/Separator";
import "./Installations.scss";

const Installations = () => {
  return (
    <div>
      <div className="installations-box">
        <div className="installations-box-content">
          <div className="installations-box-content-titleAndDesc">
            <h1>Instalaciones</h1>
            <div className="installations-box-content-titleAndDesc-desc">
              <p>La vida, como nueva.</p>
              <p>
                Exploración global sin complicaciones. Sólo tienes que aparecer
                y empezar a vivir tu mejor vida.
              </p>
            </div>
          </div>
          <div className="installations-box-content-header">
            <h3>Mira lo que te incluye</h3>
            <a href="/">Consulta todos los beneficios</a>
          </div>
          <div className="installations-box-content-cards">
            <div className="installations-box-cards-eachCard">
              <img
                src="/assets/images/installations1.png"
                alt="InstallationsImage"
              ></img>
              <div className="installations-box-cards-eachCard-text">
                <h4>Registro sencillo</h4>
                <p>
                  Un registro rápido y sin complicaciones. Encuentra la vivienda
                  que te gusta, solicítala y regístrate con un clic.
                </p>
              </div>
            </div>
            <div className="installations-box-cards-eachCard">
              <img
                src="/assets/images/installations1.png"
                alt="InstallationsImage"
              ></img>
              <div className="installations-box-cards-eachCard-text">
                <h4>Registro sencillo</h4>
                <p>
                  Un registro rápido y sin complicaciones. Encuentra la vivienda
                  que te gusta, solicítala y regístrate con un clic.
                </p>
              </div>
            </div>
            <div className="installations-box-cards-eachCard">
              <img
                src="/assets/images/installations1.png"
                alt="InstallationsImage"
              ></img>
              <div className="installations-box-cards-eachCard-text">
                <h4>Registro sencillo</h4>
                <p>
                  Un registro rápido y sin complicaciones. Encuentra la vivienda
                  que te gusta, solicítala y regístrate con un clic.
                </p>
              </div>
            </div>
            <div className="installations-box-cards-eachCard">
              <img
                src="/assets/images/installations1.png"
                alt="InstallationsImage"
              ></img>
              <div className="installations-box-cards-eachCard-text">
                <h4>Registro sencillo</h4>
                <p>
                  Un registro rápido y sin complicaciones. Encuentra la vivienda
                  que te gusta, solicítala y regístrate con un clic.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Separator></Separator>
      </div>
    </div>
  );
};

export default Installations;
