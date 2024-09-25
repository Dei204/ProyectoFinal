import React from 'react';
import "../Styles/NavBar.css";
import LOGO from '../assets/Img/logo.jpg';
import { Link } from "react-router-dom"


const Formnavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className='Logo' src={LOGO} alt="Logo"/>
      </div>
      <div className="navbar-links">
        <Link to="/">Incio</Link>
        <Link to="/Productos">Personal</Link>
        <Link to="/Nosotros">Nosotros</Link>
        <Link to="/Contacto">Contacto</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="navbar-cart">
        <a href="#cart">Cart</a>
        <a href="#profile">Profile</a>
      </div>
    </nav>
  );
};

export default Formnavbar;

