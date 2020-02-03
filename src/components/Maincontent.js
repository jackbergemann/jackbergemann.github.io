import React from 'react';
import maincontentimg from '../images/maincontentimg.jpg';

const Maincontent = () => {
    return (
        <div className='maincontent'>
            <img src={maincontentimg} />
            <div className='mainrightcolumn'>
                <p className='maincontentstatement'>Fully Responsive, Custom Designed Websites.</p>
                <button className="btn-hover color-9">Contact Jack</button>
            </div>
        </div>
    )
};

export default Maincontent;