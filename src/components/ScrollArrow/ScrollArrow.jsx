import React from 'react';
import './ScrollArrow.css';

export default function ScrollArrow({ targetId }) {
    const scrollToNext = () => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="scroll-arrow" onClick={scrollToNext}>
            <i className="fas fa-chevron-down"></i>
        </div>
    );
}