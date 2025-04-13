import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'>About Me</li>
                    <li className='nav-item'>Projects</li>
                    <li className='nav-item'>Resume</li>
                    <li className='nav-item'>Contact</li>
                </ul>
            </nav>
        </>
    )
}