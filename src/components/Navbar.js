import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <BrowserRouter>
            <ul>
                <li className='jack'><p>Jack Bergemann</p></li>
                <li><Link to="/contact" >Contact</Link></li>
                {/* <li><a href="#" >Resume</a></li> */}
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio" >Portfolio</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
            </BrowserRouter>
        </div>
    )
}

export default Navbar;