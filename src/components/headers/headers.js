import React from 'react';
import {Link} from "react-scroll";
import "./headers.css";
import mlogo from "./mlogo11.png"

const Headers = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <Link to='home'  smooth={true} duration={500}>
                <h1 className='home-name'>HO<span><img src={mlogo} className="img" alt="home" height="40px" width="38px"/></span>E</h1>
            </Link>  
        </div>
        <div className='header_right'>
            {/* linkto name and element name should be same */}
            <Link to='about' smooth={true} duration={500}>
                <h4 className='hr1'>About me</h4>
            </Link>
            <Link to='skills' smooth={true} duration={500}>
                <h4>Skills</h4>
            </Link>
            <Link to='projects' smooth={true} duration={500}>
                <h4>Projects</h4>
            </Link>
            <Link to='experience' smooth={true} duration={500}>
                <h4>Experience</h4>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
                <h4>Contact</h4>
            </Link>
            <h4 className='resume'>Resume</h4>
        </div>
    </div>
  )
}

export default Headers