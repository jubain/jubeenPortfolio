import React from 'react';
import './menu.css'

function Menu({ menuOpen, setmenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && 'active')}>
            {console.log('hi')}
            <ul>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#intro">INTRO</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#portfolio">SKILLS</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#works">WORKS</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#testimonial">TIMELINE</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;