import React from 'react';
import './menu.css'

function Menu({ menuOpen, setmenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && 'active')}>
            {console.log('hi')}
            <ul>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#testimonial">Testimonial</a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;