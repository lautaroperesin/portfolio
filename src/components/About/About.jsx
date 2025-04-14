import React from 'react'
import './About.css'
import foto from '../../assets/images/foto-perfil-traje.jpeg'
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import cvFile from '../../assets/Lautaro-Peresin-CV.pdf';

export default function About() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'Lautaro-Peresin-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-content">
                    <div className="about-image-container">
                        <div className="about-image">
                            <img src={foto} alt="Lautaro Peresin" />
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/lautaroperesin" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/lautaro-peresin" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="about-text">
                        <span className="greeting">¡Hola! 👋 Soy</span>
                        <h1>Lautaro Peresin</h1>
                        <h2>Desarrollador Full Stack</h2>
                        <p className="about-description">
                        Apasionado por la tecnología, con experiencia en el desarrollo de 
                        aplicaciones web, móviles y de escritorio.<br/>
                        Enfocado en el diseño de soluciones innovadoras que resuelvan problemas reales, 
                        optimicen procesos y generen impacto en los usuarios.<br/>
                        </p>
                        <div className="about-cta">
                            <button className="primary-btn" onClick={handleDownloadCV}>
                                <i className="fas fa-download"></i> Descargar CV
                            </button>
                            <button className="secondary-btn" onClick={handleContact}>
                                <i className="fas fa-envelope"></i> Contactar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollArrow targetId="skills" />
        </section>
    )
}