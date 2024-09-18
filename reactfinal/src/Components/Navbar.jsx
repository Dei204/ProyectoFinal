import React from 'react';
import "../Styles/NavBar.css"
import LOGO from '../assets/Img/logo.jpg'
 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className='Logo' src={LOGO} alt="Logo" />
      </div>
      <div className="navbar-links">
        <a>Personal</a>
        <a>Productos</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="navbar-cart">
        <a>bbb</a>
        <a>aaa</a>
      </div>
    </nav>
  );
};

export default Navbar;
