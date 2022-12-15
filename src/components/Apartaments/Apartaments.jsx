import React from "react";
import "./Apartaments.scss";

const Apartaments = () => {
  return (
    <div>
      <div className="apartaments-box">
        <h1>Apartamentos</h1>
        <div className="apartaments-box-Searcher">
          <div className="apartaments-box-Searcher-filters">
            <input type="text" placeholder="Madrid"></input>
            <input type="text" placeholder="Home Type"></input>
            <button>Clear All</button>
            <button>
              <img src="assets/icons/searchIcon.png" alt="Search icon"></img>
            </button>
          </div>
          <div className="apartaments-box-Searcher-showMapButton">
            <input type="checkbox"></input>
            <p>Show map</p>
          </div>
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
    </div>
  );
};

export default Apartaments;
