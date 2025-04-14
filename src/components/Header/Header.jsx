import React, { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile && isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isMenuOpen, isMobile]);

    const toggleMenu = () => {
        if (isMobile) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    const handleNavClick = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    return(
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <a href="#about">
                        <span className="logo-text">LP</span>
                    </a>
                </div>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#about" onClick={handleNavClick}>Sobre mí</a></li>
                        <li><a href="#skills" onClick={handleNavClick}>Habilidades</a></li>
                        <li><a href="#projects" onClick={handleNavClick}>Proyectos</a></li>
                        <li><a href="#contact" onClick={handleNavClick}>Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}