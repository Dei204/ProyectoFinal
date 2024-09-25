import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/Contacto.css'

export default function Formcontacto() {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_1kzbt03', 'template_8z49j8d', form.current, {
              publicKey: 'JikYI-dZcAaF_xWcd',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };
      
    
  return (
     
    <div className='tristana'>
    <form className='yumi' ref={form} onSubmit={sendEmail}>
    <label className='talon' >Nombre  </label>
    <input className='veigar' type="text" name="user_name" placeholder='Nombre Completo...' />
    <label className='mole'>Email</label>
    <input className='pato' type="email" name="user_email" placeholder='Correo Electronico...' />
    <label className='atrox'>Mensaje</label>
    <textarea className='Escriba' name="user_message" placeholder='Escriba Aqui...' />
    <input className='lulu' type="submit" value="Enviar " />
    </form>
    </div> 



  )
}
