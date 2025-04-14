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
            'service_qi2c34n',
            'template_p76hnpi',
            form.current,
            'yMhGfkY1lGMcTu4q-'
        )
        .then(() => {
            setSent(true);
            form.current.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
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