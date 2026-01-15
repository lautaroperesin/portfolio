import React, { useState } from 'react';
import './Projects.css';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import fotoClinica from '../../assets/images/clinica.png';
import fotoSisTransporte from '../../assets/images/trasnporte.png';
import fotoMenuDigital from '../../assets/images/menu-digital.png';
import fotoVerificadorPrecios from '../../assets/images/verificador-precios.jpeg';
import fotoControlAsistencia from '../../assets/images/control-asistencia.png';
import fotoLogisticaWeb from '../../assets/images/logistica-web.png';
import fotoGatoNegro from '../../assets/images/gato-negro.png';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            title: "Sistema de Ventas para Bar (POS)",
            description: "Sistema completo de punto de venta y administración para bar. Permite realizar ventas rápidas al contado o gestionar cuentas abiertas por cliente, llevar el control de inventario en tiempo real, administrar el flujo de caja con apertura y cierre de caja diario, y gestionar clientes con visualización de cuentas pendientes y reporte de morosos. Todo integrado en una sola aplicación de escritorio optimizada para el trabajo diario del personal del bar.",
            image: fotoGatoNegro,
            technologies: ["WPF", "C#", "Entity Framework", "MySQL"]
        },
        {
            title: "Sistema de Gestión para Clínica",
            description: "Aplicación de escritorio para administrar turnos médicos, pacientes, profesionales de la salud, prácticas médicas y obras sociales. Incluye funcionalidades como control de caja diaria, generación de informes y pantallas adaptadas según la especialidad médica. Optimiza el trabajo diario del personal de recepción y los profesionales.",
            image: fotoClinica,
            technologies: ["WinForms", "C#", "Entity Framework Core", "MySQL"]
        },
        {
            title: "Sistema de Gestión de Transportes de Carga",
            description: "La aplicación permite registrar viajes, empleados y facturación, así como generar balances contables de forma clara y eficiente. Ideal para llevar un control interno del movimiento logístico y administrativo del negocio.",
            image: fotoSisTransporte,
            technologies: ["WinForms", "C#", "Entity Framework", "SQLite"]
        },
        {
            title: "Verificador de Precios",
            description: "Aplicación Android para una juguetería, permitiendo escanear productos mediante lectores de códigos de barras conectados a tablets. La app obtenía y mostraba información del producto, optimizando la consulta de precios dentro del local.",
            image: fotoVerificadorPrecios,
            technologies: ["Xamarin", "MySQL"],
        },
        {
            title: "Sistema de Gestión Logística",
            description: "Sistema integral para optimizar la trazabilidad y administración de envíos en el sector agropecuario. Incluye autenticación por roles, seguimiento de envíos en tiempo real, gestión de entidades clave y despliegue en la nube. Plataformas: API REST con ASP.NET Core, app móvil para conductores (.NET MAUI) y portal web (Blazor).",
            image: fotoLogisticaWeb,
            github: "https://github.com/lautaroperesin/GestionLogistica",
            technologies: ["ASP.NET Core", ".NET MAUI", "Blazor", "MySQL", "Firebase", "AWS EC2", "Azure"]
        },
        {
            title: "Sistema de Control de Asistencia",
            description: "Aplicación de escritorio para controlar la asistencia de empleados, obteniendo registros de entrada y salida mediante un dispositivo biométrico conectado a través de red (IP y puerto).",
            image: fotoControlAsistencia,
            technologies: ["WinForms", "C#", "SQLite"],
            liveDemo: "",
            github: "https://github.com/lautaroperesin/control-acceso-biometrico"
        },
        {
            title: "Menú Digital",
            description: "Aplicación web para digitalizar el menú de restaurantes, permitiendo a los clientes visualizar productos, realizar pedidos y reservas. Implementando un panel de administración para gestionar el negocio.",
            image: fotoMenuDigital,
            technologies: ["NextJS", "NodeJS", "React", "MySQL"],
            liveDemo: "",
            github: "https://github.com/lautaroperesin/menu-digital"
        },
    ];

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h2>Mis Proyectos</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article
                            className="project-card"
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    setSelectedProject(project);
                                }
                            }}
                        >
                            {project.image && (
                                <div className="project-image-container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className="project-cta"
                                >
                                    Más información
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {selectedProject && (
                <div
                    className="project-modal-backdrop"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="project-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="project-modal-close"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Cerrar"
                        >
                            ×
                        </button>
                        {selectedProject.image && (
                            <div className="project-modal-image">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                />
                            </div>
                        )}
                        <div className="project-modal-content">
                            <h3 className="project-modal-title">
                                {selectedProject.title}
                            </h3>
                            <div className="project-technologies">
                                {selectedProject.technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="project-modal-description">
                                {selectedProject.description}
                            </p>
                            {(selectedProject.github || selectedProject.liveDemo) && (
                                <div className="project-modal-links">
                                    {selectedProject.github && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-github" />
                                            <span>Código</span>
                                        </a>
                                    )}
                                    {selectedProject.liveDemo && (
                                        <a
                                            href={selectedProject.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fas fa-external-link-alt" />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <ScrollArrow targetId="contact" />
        </section>
    );
}
