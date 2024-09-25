import React from 'react';
import "../Styles/Nosotros.css"

const Formnosotros = () => {
  return (
    <div className="about-us">
      <h1 className=' dei'>Sobre Nosotros</h1>
      <p>
        Somos un pequeño negocio que se dedica a verder productos como 
        Ropa, Juguetes, Electrodomesticos y entre otro.
      </p>
      
      <h2 className='Punta'>Nuestros Valores</h2>
      <ul className='batman'>
        <li className='perri'>Integridad</li>
        <li>Compromiso con la calidad</li>
      </ul>
    </div>
  );
};

export default Formnosotros;
