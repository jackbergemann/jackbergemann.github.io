import React from 'react';
import headshot from '../images/headshot.jpg';

const About = () => {
    return (
        <div className="aboutcontent">
            <img src={headshot} />
            <div className='aboutrightcolumn'>
                <p>Hi, I’m Jack and if you’re wondering what I’m all about, you’ve come to the right page. I am from a small town in Iowa recently married to the love of my life. Together we share our first home with our two dogs Waylon and Remy. They are the light of my life.
                My passion for web development began in high school, taking all availablke computer science courses. Then in college I studied a little more in depth. After taking a couple years off to travel the country with my wife I have resumed web development. I am currently a student at Lambda School, and am growing raplidy from what I learn there. I hope to spend my career building powerful, useful, and efficient web applications for years to come.</p>
            </div>
        </div>
    )
}

export default About;