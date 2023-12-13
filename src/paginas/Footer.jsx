import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container p-4 pb-0">
        <section className="social-media mb-4">
          <h3>Redes Sociales</h3>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/i/flow/login" role="button">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com.bo/?hl=es" role="button">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-outline-light btn-floating m-1" href="https://es.linkedin.com/" role="button">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/" role="button">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
          </ul>
        </section>
        <section className="registration-form">
          <h3>Formulario de Registro</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Edad"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo Electrónico"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </form>
        </section>
      </div>
        <p></p>
        <p></p>
        <p>Derechos Reservados - Carrera de Informática UMSA</p>
        <p>Info Pro - Creaciones NPL</p>
    </footer>
  );
};

export default Footer;