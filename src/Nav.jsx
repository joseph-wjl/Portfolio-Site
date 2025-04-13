import React from 'react';
import './Nav.css';

export default function Nav() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'>About Me</li>
                    <li className='nav-item'>Projects</li>
                    <li className='nav-item'>Resume</li>
                    <li className='nav-item' onClick={scrollToContact}>Contact</li>
                </ul>
            </nav>
        </>
    )
}