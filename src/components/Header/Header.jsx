import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Navbar></Navbar>
      <div className="header-box">
        <div className="header-box-content">
          <div className="header-box-content-logo">
            <img src="assets/images/logo.png" alt="User logo" />
          </div>
          <div className="header-box-content-buttons">
            <button>Contáctanos</button>
            <button>Reserva Ya</button>
          </div>
          <div className="header-box-content-arrowIcon"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
