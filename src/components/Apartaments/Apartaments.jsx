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
        <div className="apartaments-box-cards">
          <div className="apartaments-box-cards-eachCard">
            <img className="eachCard-image"
              src="/assets/images/apartament1.png"
              alt="ApartamentImage"
            ></img>

            <div className="apartaments-box-cards-eachCard-content">
              <div className="apartaments-box-cards-eachCard-content-desc">
                <h5>Habitación privada — Madrid, Centro</h5>
                <img src="/assets/icons/heart.png" alt="HeartIcon"></img>
              </div>
              <h3>Calle Atocha 66 3º Izq</h3>
              <div className="apartaments-box-cards-eachCard-content-details">
              <img className="details-image" src="/assets/icons/bed.png" alt="BedIcon"></img>
                <div>
                  <p>8 habs</p>
                </div>
              <img className="details-image" src="/assets/icons/map.png" alt="MapIcon"></img>
                <div>
                  <p> 9 sqm.</p>
                </div>
              <img className="details-image" src="/assets/icons/stairs.png" alt="StairsIcon"></img>
                <div>
                  <p>3er Piso</p>
                </div>
              </div>
              <div className="apartaments-box-cards-eachCard-content-moreDetails">
                <div className="apartaments-box-cards-eachCard-content-moreDetails-disp">
                  <h5 id="disp">Disponible desde</h5>
                  <h5>2 Dic 2022</h5>
                </div>
                <div className="apartaments-box-cards-eachCard-content-moreDetails-price">
                  <h4>€ 600</h4>
                  <h5>/ mes</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartaments;
