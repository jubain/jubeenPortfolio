import React, { useEffect, useRef } from 'react';
import './intro.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped';
import { Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Frontend Developer", "Student", "Technology Freak"],
            backDelay: 1500,
            backSpeed: 50
        })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imageContainer">
                    <img src="./assets/me.png" />
                </div>
            </div>
            <div className="right">
                <div className='wrapper'>
                    <h3>Hi there, I'm</h3>
                    <h2>Jubeen Amatya</h2>
                    <h3>I am a <span ref={textRef}></span></h3>
                    <p>
                        I am an information technology undergraduate student recently graduated with a first-class honour skilled in software and website design,
                        debugging, and tests. I am a strong player who can quickly learn and apply new technologies.
                        I am looking to get into the world of software development utilizing my skills and knowledge.
                    </p>
                </div>
            </div>
            <a href='#portfolio'>
                <KeyboardArrowDownIcon className='image' />
            </a>
        </div>
    );
}

export default Intro;