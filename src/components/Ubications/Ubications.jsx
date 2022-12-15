import React from "react";
import "./Ubications.scss";

const Ubications = () => {
  return (
    <div className="ubications-box">
      <div className="ubications-box-titleAndDesc">
        <h1>Ubicaciones</h1>
        <p>
          Viviendas únicas y exclusivas en una zona privilegiada de Madrid,
          Barcelona o Bilbao entre otras.
        </p>
      </div>
      <div className="ubications-box-cards">
        <div className="ubications-box-cards-eachCard">
          <h3>BARCELONA</h3>
          <button>Ver más</button>
        </div>
        <div className="ubications-box-cards-eachCard">
          <h3>MADRID</h3>
          <button>Ver más</button>
        </div>
        <div className="ubications-box-cards-eachCard">
          <h3>BILBAO</h3>
          <button>Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default Ubications;
