import React from 'react';
import "../Styles/Footer.css"
import { Link } from "react-router-dom"


const Formfoter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Acerca de Nosotros </h3>
          <p> Somos una Negocion que vende productos de shein y de mas lugares</p>
        </div>
        <div className="footer-section">
          <h3>Navegación</h3>
          <ul>
            <li><Link to="/Contacto">Contacto</Link></li>
            <li><Link to="/Nosotros">Nosotros</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email : </p>
          <p>Teléfono : </p>
        </div>
        <div className="footer-section">
          <h3 cla>Síguenos</h3>
          <ul className="social-links">
            <li><a href="" target="_blank" rel="noopener noreferrer">Facebook :</a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer">Instagram :</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>

  );
};

export default Formfoter
