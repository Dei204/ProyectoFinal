import React, { useEffect, useState } from 'react';
import '../Styles/Cartas.css';
import { fetchItems } from '../Services/Productos';

const Cartas = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const fetchData = async () => {
        try {
            const datos = await fetchItems();
            setItems(datos);
        } catch (err) {
            setError("Error al obtener los artículos: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="cards-container">
            {items.map((item) => (
                <div className="card" key={item.id}>
                    <img className='diluc' src={item.img} alt={item.nombre} />
                    <h2 className='torruga'>{item.nombre}</h2>
                    <p className='exas'>Precio: ${item.precio}</p>
                    <p className='exas'>Categoría: {item.categoria}</p>
                    <p className='exas'>Descripción: {item.descripcion}</p>
                    <button className='guardian' onClick={() => onEdit(item)}>Editar</button>
                    <button className='guardian' onClick={() => onDelete(item.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default Cartas;

