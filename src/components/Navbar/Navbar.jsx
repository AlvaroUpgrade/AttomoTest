import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <a href="/">
          <img src="assets/images/logo.png" alt="User logo" />
        </a>
      </div>
      <div className="nav-sections">
        <a href="/">Ubicaciones</a>
        <a href="/">Apartamentos</a>
        <a href="/">Galeria</a>
        <a href="/">Sobre Nosotros</a>
        <a href="/">Contáctanos</a>
        <a href="/">Reserva Ya</a>
        <a href="/">
          <img src="assets/icons/user.png" alt="User logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
