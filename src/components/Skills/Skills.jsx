import React from 'react'
import './Skills.css'
import ScrollArrow from '../ScrollArrow/ScrollArrow';

export default function Skills() {
    const skillsByCategory = {
        'Frontend': [
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'NextJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
        ],
        'Backend': [
            { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
            { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
            { name: 'Entity Framework Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
            { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
        ],
        'Bases de Datos': [
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
            { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
        ],
        'Herramientas': [
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
        ]
    };

    const orderedCategories = ['Frontend', 'Backend', 'Bases de Datos', 'Herramientas'];

    return(
        <section className="skills" id="skills">
            <div className="skills-container">
                <div className="skills-title">
                    <h2>Habilidades</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="skills-grid">
                    {orderedCategories.map((category) => (
                        <div className="skills-column" key={category}>
                            <h3>{category}</h3>
                            <div className="skills-list">
                                {skillsByCategory[category].map((skill, index) => (
                                    <div className="skill-item" key={index}>
                                        <div className="skill-icon">
                                            <img src={skill.icon} alt={skill.name} />
                                        </div>
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