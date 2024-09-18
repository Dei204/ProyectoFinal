import React, {useState}  from 'react';
import getUsers from '../Services/Getusers';
import "../Styles/Login.css"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica si todos los campos están llenos
        if (!email || !password) {
            setMessage('Por favor, complete todos los campos.');
            setMessageClass('error-message');
            return; // Sale de la función si hay campos vacíos
        }

        try {
            let users = await getUsers();
            const user = users.find(user => user.email === email);

            if (user) {
                if (user.password === password) {
                    // Mensaje de éxito
                    setMessage('Inicio de sesión exitoso.');
                    setMessageClass('success-message');

                    // Limpia los campos del formulario solo si la autenticación es exitosa
                    setEmail('');
                    setPassword('');
                } else {
                    setMessage('Contraseña incorrecta.');
                    setMessageClass('error-message');
                }
            } else {
                // Si el usuario no se encuentra, muestra un mensaje de error
                setMessage('Email incorrecto.');
                setMessageClass('error-message');
            }
        } catch (error) {
            console.error('Error al intentar acceder al login:', error);
            setMessage('Ocurrió un error al intentar acceder al login.');
            setMessageClass('error-message');
        }
    };

    return (
        <div className='Extras' id='formCont'>
            <form className='manzana' onSubmit={handleSubmit}>
                <div className='Meli'>
                    <label className='Mid' htmlFor="email">Email:</label>
                    <input
                        className='memo'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='Tonto'>
                    <label htmlFor="password">Password:</label>
                    <input
                        className='Pedro'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='Otra' type="submit">Enviar</button>
                {message && (
                    <div className={messageClass}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default LoginForm;
