import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-box">
      <div className="contact-box-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-box-content">
        <div className="contact-box-content-imageInfo">
          <p>
            No es posible garantizar un proyecto como este si detrás no hay un
            grupo de profesionales y una empresa con gran experiencia y
            solvencia en el mercado inmobiliario.
          </p>
        </div>
        <div className="contact-box-content-formulary">
          <h1>Solicita Información</h1>
          <label>
            <p>Nombre</p>
            <input type="text"></input>
          </label>
          <label>
            <p>Teléfono</p>
            <input type="number"></input>
          </label>
          <label>
            <p>Email</p>
            <input type="email"></input>
          </label>
          <label>
            <p>Mensaje</p>
            <input id="message" type="text"></input>
          </label>
          <button>Enviar Solicitud</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
