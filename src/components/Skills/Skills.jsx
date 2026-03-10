import React from 'react'
import './Skills.css'
import ScrollArrow from '../ScrollArrow/ScrollArrow';

export default function Skills() {
    const skillsByCategory = {
        'Frontend': {
            icon: 'fa-laptop-code',
            color: '#3b82f6',
            skills: [
                { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: 'Blazor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg' },
                { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
            ]
        },
        'Backend': {
            icon: 'fa-server',
            color: '#10b981',
            skills: [
                { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
                { name: 'ASP.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
                { name: 'Entity Framework Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/firebase/firebase-original.svg' },
                { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/supabase/supabase-original.svg' }
            ]
        },
        'Bases de Datos': {
            icon: 'fa-database',
            color: '#f59e0b',
            skills: [
                { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
                { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            ]
        },
        'Herramientas': {
            icon: 'fa-tools',
            color: '#8b5cf6',
            skills: [
                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
            ]
        }
    };

    const orderedCategories = ['Frontend', 'Backend', 'Bases de Datos', 'Herramientas'];

    return(
        <section className="skills" id="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <h2>Stack Tecnológico</h2>
                    <p className="skills-description">
                        Domino un stack moderno y versátil, desde aplicaciones de escritorio con .NET 
                        hasta soluciones web full-stack.
                    </p>
                </div>

                <div className="skills-grid">
                    {orderedCategories.map((category) => (
                        <div className="skill-card" key={category}>
                            <div className="skill-card-header">
                                <div className="skill-card-icon" style={{ '--category-color': skillsByCategory[category].color }}>
                                    <i className={`fas ${skillsByCategory[category].icon}`}></i>
                                </div>
                                <h3>{category}</h3>
                            </div>
                            <div className="skill-tags">
                                {skillsByCategory[category].skills.map((skill, index) => (
                                    <div className="skill-tag" key={index}>
                                        <img src={skill.icon} alt={skill.name} />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollArrow targetId="projects" />
        </section>
    )
}