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
                src="/assets/images/installations2.png"
                alt="InstallationsImage"
              ></img>
              <div className="installations-box-cards-eachCard-text">
                <h4>Apartamentos amueblados</h4>
                <p>
                  Todos nuestros apartamentos están completamente amueblados y
                  listos para ser habitados. Trae tus cosas, nosotros nos
                  encargamos del resto.
                </p>
              </div>
            </div>
            <div className="installations-box-cards-eachCard">
              <img
                src="/assets/images/installations3.png"
                alt="InstallationsImage"
              ></img>
              <div className="installations-box-cards-eachCard-text">
                <h4>Todos los gastos incluidos</h4>
                <p>
                  Sin sorpresas, todos los gastos están incluidos en el
                  alquiler. Facturas, internet, manutención, lo que quieras.
                </p>
              </div>
            </div>
            <div className="installations-box-cards-eachCard">
              <img
                src="/assets/images/installations4.png"
                alt="InstallationsImage"
              ></img>
              <div className="installations-box-cards-eachCard-text">
                <h4>Eventos de la comunidad</h4>
                <p>
                  Conferencias, clases de yoga, noches de bar y mucho más. Únete
                  a nuestras reuniones comunitarias, todo corre de nuestra
                  cuenta.
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
