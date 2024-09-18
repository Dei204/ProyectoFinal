import React, { useState, useEffect } from 'react';
import "../Styles/Productos.css";
import { ProductoData } from '../Services/PosProductos'; 
import BasicExample from './Cartas';

const FormProducto = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null); 
  const [imagenPreview, setImagenPreview] = useState('');
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const precioNumero = parseFloat(precio);

    if (isNaN(precioNumero)) {
      alert('Por favor, ingrese un precio válido.');
      return;
    }

    const data = { nombre, precio: precioNumero, descripcion, imagen: imagenPreview };

    try {
      setLoading(true);
      const response = await ProductoData(data);
      console.log('API Response:', response);

      setCartas([...cartas, { nombre, precio: precioNumero, descripcion, imagen: imagenPreview }]);
      alert('Carta añadida correctamente');
      resetForm();
    } catch (error) {
      console.error('Error al añadir carta:', error.message);
      setErrorMessage('Hubo un problema al añadir la carta. Por favor, inténtelo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setNombre('');
    setPrecio('');
    setDescripcion('');
    setImagen(null);
    setImagenPreview('');
    setErrorMessage('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagenPreview(URL.createObjectURL(file));
      setImagen(file); 
    }
  };

  useEffect(() => {
    return () => {
      if (imagenPreview) {
        URL.revokeObjectURL(imagenPreview);
      }
    };
  }, [imagenPreview]);

  return (
    <div className='negro'>
      <h1 className='perro'>Agregar Nueva Carta</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className='carlos'>
          <label className='messi'>Nombre:</label>
          <input
            className='bicho'
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className='ronaldo'>
          <label>Precio:</label>
          <input
            className='fabio'
            type="number"
            step="0.01"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className='gallina'>
          <label className='nixon'>Descripción:</label>
          <textarea
            className='arron'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>
        <div className='niki'>
          <label className='su'>Imagen:</label>
          <input
            className='verano'
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagenPreview && <img src={imagenPreview} alt="Vista previa" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
        </div>
        <button className='playa' type="submit" disabled={loading}>
          {loading ? 'Añadiendo...' : 'Añadir al Carrito'}
        </button>
      </form>
      <div className='card-list'>
        {cartas.map((carta, index) => (
          <BasicExample
            key={index}
            nombre={carta.nombre}
            precio={carta.precio}
            descripcion={carta.descripcion}
            imagen={carta.imagen}
          />
        ))}
      </div>
    </div>
  );
};

export default FormProducto;
