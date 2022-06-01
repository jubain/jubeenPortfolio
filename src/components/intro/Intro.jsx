import React, { useEffect, useRef } from 'react';
import './intro.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped';
import { Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function Intro() {

    const textRef = useRef()

    const isMobile = useMediaQuery({ query: '(max-width: 425px)' })

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Developer", "Technology freak", "Gym freak"],
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
                    <h2>Hi there, I'm</h2>
                    <h1>Jubeen Amatya</h1>
                    <h3>I am <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <KeyboardArrowDownIcon className='image' />
                </a>
                <Button className='cv-download-button' size={isMobile ? 'sm' : 'lg'}>Download CV</Button>
            </div>
        </div>
    );
}

export default Intro;