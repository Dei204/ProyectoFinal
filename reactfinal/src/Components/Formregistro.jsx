import React, { useState } from 'react';
import getUsers from '../Services/Getusers';
import postUsers from '../Services/Postusers';
import "../Styles/Registro.css"
 
const RegistroForm = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('black');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!nombre || !email || !password) {
            setMessage('Por favor, complete todos los campos.');
            setMessageColor('red');
            return;
        }else{
          try {
            const users = await getUsers();
            console.log(users);
            
            const emailExists = users.some(user => user.email === email);
            console.log(emailExists);
            
            if (emailExists) {
                setMessage('El email ya está registrado.');
                setMessageColor('red');
                return;
            } else {
                await postUsers(nombre, email, password);

                setMessage('Datos enviados exitosamente.');
                setMessageColor('green');

                // Limpia los campos del formulario
                setNombre('');
                setEmail('');
                setPassword('');

            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            setMessage('Ocurrió un error al enviar los datos.');
            setMessageColor('red');
        }
        }       
    };

    return (


        <div className='titi'>
            <form className='Jesus' onSubmit={handleSubmit}>
                <div className='puta'>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        className='Jose'
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='antonio'>
                    <label className='ernesto' htmlFor="email">Email:</label>
                    <input
                        className='oscar'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='alex'>
                    <label className='entero' htmlFor="password">Password:</label>
                    <input
                        className='andres'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='ernesto' type="submit">Enviar</button>
                <div className='gato' style={{ color: messageColor }}>{message}</div>
            </form>
        </div>
    );
};

export default RegistroForm;
