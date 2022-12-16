import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-box">
      <div className="footer-box-lists">
        <div className="footer-box-lists-eachList">
          <h3>Locations</h3>
          <ul>
            <a href="/">
              <li>Berlin</li>
            </a>
            <a href="/">
              <li>Barcelona</li>
            </a>
            <a href="/">
              <li>Madrid</li>
            </a>
            <a href="/">
              <li>Lisbon</li>
            </a>
            <a href="/">
              <li>Milan</li>
            </a>
          </ul>
        </div>
        <div className="footer-box-lists-eachList">
          <h3>Company</h3>
          <ul>
            <a href="/">
              <li>About</li>
            </a>
            <a href="/">
              <li>Careers</li>
            </a>
            <a href="/">
              <li>Terms</li>
            </a>
            <a href="/">
              <li>Imprint</li>
            </a>
            <a href="/">
              <li>Privacy</li>
            </a>
            <a href="/">
              <li>Press</li>
            </a>
          </ul>
        </div>
        <div className="footer-box-lists-eachList">
          <h3>Partnerships</h3>
          <ul>
            <a href="/">
              <li>Landlords</li>
            </a>
            <a href="/">
              <li>Corporates</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="footer-box-iconsAndDesc">
        <div className="footer-box-iconsAndDesc-icons">
          <a href="https://es-es.facebook.com/">
            <img src="/assets/icons/facebook.png" alt="facebookIcon"></img>
          </a>
          <a href="https://twitter.com/home?lang=es">
            <img src="/assets/icons/twitter.png" alt="twitterIcon"></img>
          </a>
          <a href="https://www.instagram.com/">
            <img src="/assets/icons/instagram.png" alt="instagramIcon"></img>
          </a>
          <a href="https://www.linkedin.com/in/alvaro-ruiz-navarro/">
            <img src="/assets/icons/linkedin.png" alt="linkedinIcon"></img>
          </a>
        </div>
        <div className="footer-box-iconsAndDesc-desc">
          <div className="footer-box-iconsAndDesc-desc-moreInfo">
            <a href="/">Aviso legal</a>
            <p>|</p>
            <a href="/">Protección de datos </a>
            <p>|</p>
            <a href="/">Cookies</a>
          </div>
          <div className="footer-box-iconsAndDesc-desc-attomo">
            <p>Powered by </p>
            <p id="special">Attomo </p>
          </div>
          <div className="footer-box-iconsAndDesc-desc-ad">
            <p>© 2022 Alfa Real</p>
          </div>
        </div>
      </div>
      <div className="footer-box-moreInfo">
        <p>Coliving</p>
        <p>Calle 12 28015 – Madrid</p>
        <p>912 000 000 - 900 000 322</p>
        <p>contacto@coliving.es</p>
      </div>
    </div>
  );
};

export default Footer;
