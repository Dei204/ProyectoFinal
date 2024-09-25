
import React, { useState, useEffect } from 'react';
import Cartas from '../Components/Cartas.jsx'
import { fetchItems, addItem, updateItem, deleteItem } from '../Services/Productos.jsx'
import '../Styles/Productos.css'


const FormProducto = () => {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        img: '',
        categoria: '',
        descripcion: ''
    });
    const [editIndex, setEditIndex] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchItems();
            setItems(data);
        };
        loadData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData({ ...formData, img: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddItem = async () => {
        if (formData.nombre && formData.precio && formData.img && formData.categoria && formData.descripcion) {
            if (editIndex !== null) {
                const itemToUpdate = items[editIndex];
                const updatedItem = await updateItem(itemToUpdate.id, formData);
                setItems(items.map((item, index) => (index === editIndex ? updatedItem : item)));
                setEditIndex(null);
            } else {
                const newItem = await addItem(formData);
                setItems([...items, newItem]);
            }
            setFormData({
                nombre: '',
                precio: '',
                img: '',
                categoria: '',
                descripcion: ''
            });
            setImagePreview('');
        }
    };

    const handleEditItem = (index) => {
        setFormData(items[index]);
        setImagePreview(items[index].img);
        setEditIndex(index);
    };

    const handleDeleteItem = async (index) => {
        const itemToDelete = items[index];
        await deleteItem(itemToDelete.id);
        setItems(items.filter((_, i) => i !== index));
    };


    return (
        <div>
            <h1>Cartas</h1>
            <input 
                type="text" 
                name="nombre" 
                placeholder="Nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
            />
            <input 
                type="number" 
                name="precio" 
                placeholder="Precio" 
                value={formData.precio} 
                onChange={handleChange} 
            />
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
            />
            {imagePreview && <img src={imagePreview} alt="Vista previa" style={{ maxWidth: '100%', height: 'auto' }} />}
            <input 
                type="text" 
                name="categoria" 
                placeholder="Categoría" 
                value={formData.categoria} 
                onChange={handleChange} 
            />
            <textarea 
                name="descripcion" 
                placeholder="Descripción" 
                value={formData.descripcion} 
                onChange={handleChange} 
            />
            <button onClick={handleAddItem}>
                {editIndex !== null ? 'Actualizar' : 'Agregar'}
            </button>
            
            <div className="card-container">
                {items.map((item, index) => (
                    <Cartas 
                 
                        key={item.id} 
                        item={item} 
                        onEdit={() => handleEditItem(index)} 
                        onDelete={() => handleDeleteItem(index)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default FormProducto;
