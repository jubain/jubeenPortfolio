import React from 'react';
import './topbar.css'
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';


function Topbar({ menuOpen, setmenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            {console.log(menuOpen)}
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Me.</a>
                    <div className='itemContainer'>
                        <PersonIcon className='icon' />
                        <span>07842583541</span>
                    </div>
                    <div className='itemContainer'>
                        <MailIcon className='icon' />
                        <span>jubeennp@outlook.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setmenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;