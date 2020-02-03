import React from 'react';

const Footernav = () => {
    
    const footertextstyle = {
        color: 'white'
    };

    return (

        <div className="footercontainer">
            <div className="footernav" >
                    <a href="#" className="footerlinks">Home</a>
                    <a href="#" className="footerlinks">Portfolio</a>
                    <a href="#" className="footerlinks">About</a>
                    {/* <a href="#" className="footerlinks">Resume</a> */}
                    <a href="#" className="footerlinks">Contact</a>
            </div>
            <div>
                <p style={footertextstyle}>Copyright © 2020 Jack Bergemann • Colorado based Web Developer</p>
            </div>
        </div>
    )
}

export default Footernav