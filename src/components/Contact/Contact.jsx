import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            {
                publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            }
        )
        .then(() => {
            setSent(true);
            form.current.reset();
        })
        .catch((error) => {
            console.error('Error al enviar el email:', error);
            alert('Hubo un error al enviar el mensaje. Por favor revisa la consola o intenta más tarde.');
        })
        .finally(() => {
            setSending(false);
        });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2>Contacto</h2>
                    <div className="title-underline"></div>
                </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="user_name" 
                                placeholder="Tu nombre"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="user_email" 
                                placeholder="Tu email"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                placeholder="Tu mensaje"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" disabled={sending}>
                            {sending ? 'Enviando...' : 'Enviar mensaje'}
                        </button>
                        {sent && <p className="success-message">¡Mensaje enviado con éxito!<br/>En breve te contactaré</p>}
                    </form>
                </div>
        </section>
    );
}
