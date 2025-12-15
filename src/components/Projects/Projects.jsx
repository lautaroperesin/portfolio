import React from 'react';
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
    const projects = [
        {
            title: "Sistema de Ventas para Bar (POS)",
            description: "Aplicación de escritorio para punto de venta (POS) y gestión administrativa de un bar. Soporta ventas rápidas al contado y cuentas abiertas, módulo de clientes con visualización de cuentas pendientes (incluye filtrado de morosos), gestión de inventario y flujo de caja con apertura/cierre.",
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
            description: "Aplicación de escritorio empresa de transporte de carga. Permite registrar viajes, empleados y facturación, así como generar balances contables de forma clara y eficiente. Ideal para llevar un control interno del movimiento logístico y administrativo del negocio.",
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
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                {project.image && (
                                    <img src={project.image} alt={project.title} />
                                )}
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    )}
                                    {project.liveDemo && (
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollArrow targetId="contact" />
        </section>
    );
}
