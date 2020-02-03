import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <p className='titlestatement'>Jack Bergemann <br></br> <br></br> Full Stack Web Developer based out of central Colorado. <br></br> Specializing in responsive web applications. </p>
        </div>
    )
}

export default Header