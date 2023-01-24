import React, {useState} from 'react';
import {Link} from "react-scroll";
import "./headers.css";
import mlogo from "./mlogo11.png"
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Headers = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const handleLinkClick=()=>{
      if(click){
        setClick(!click);
      }
    }
  return (
    <div className='header'>
        <div className='header_left'>
            <Link to='home'  smooth={true} duration={500}>
                <h1 className='home-name'>HO<span><img src={mlogo} className="img" alt="home" height="40px" width="38px"/></span>E</h1>
            </Link>  
        </div>
        <div className={click ?"active":"header_right"}>
            {/* linkto name and element name should be same */}
            <Link to='about' onClick={handleLinkClick} smooth={true} duration={500}>
                <h4 className='hr1'>About me</h4>
            </Link>
            <Link to='skills' onClick={handleLinkClick} smooth={true} duration={500}>
                <h4>Skills</h4>
            </Link>
            <Link to='projects' onClick={handleLinkClick} smooth={true} duration={500}>
                <h4>Projects</h4>
            </Link>
            <Link to='experience' onClick={handleLinkClick} smooth={true} duration={500}>
                <h4>Experience</h4>
            </Link>
            <Link to='contact' onClick={handleLinkClick} smooth={true} duration={500}>
                <h4>Contact</h4>
            </Link>
            {/* <h4 className='resume'>Resume</h4> */}
            <a href={'https://drive.google.com/file/d/1eHYcwJVVY-JNeKFzRAcVwhFc79O9Kugz/view?usp=share_link'} className='resume' target="_blank" rel='noopener noreferrer'>Resume</a>
        </div>
        <div id='menu-icon' onClick={handleClick}>
          {click? <ClearIcon/>:<MenuIcon/>}
        </div>
    </div>
  )
}

export default Headers