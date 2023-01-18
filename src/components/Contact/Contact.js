import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Contact.css"

const Contact = () => {
  return (
    <Element className='contact-container' name='contact'>
        <h1>Contact</h1>
        <div className='contact-info'>
          <div className='con-socialmedia'>
            <p className='con-email'> Email : <span>piraisoodanv1996@gmail.com</span></p>
            <p className='con-num'>Contact number : <span>8778678598</span></p>
            <p className='con-num'>WhatsApp number : <span>8778678598</span></p>
            <div className='con-icon'>
              <a href='https://github.com/V-Piraisoodan' target="_blank" rel='noopener noreferrer'>
                <IconButton>
                  <GitHubIcon className='github' sx={{ color: 'black' }}/>
                </IconButton>
              </a>
              <a href='https://www.linkedin.com/feed/' target="_blank" rel='noopener noreferrer'>
                <IconButton>
                  <LinkedInIcon className='linked' color='primary'/>
                </IconButton>
              </a>
            </div>
          </div>
          <div className='con-address'>
            <div className='con-current'>
              <h2>Temperory Address </h2>
              <h3>Ramachandrapura,</h3>
              <h3>Jalahalli East,</h3>
              <h3>Bengaluru,</h3>
              <h3>Karnataka 560097.</h3>
            </div>
            <div className='con-permanent'>
            <h2>Permanent Address </h2>
              <h3>Somanahalli(vill),</h3>
              <h3>Palacode(tk),</h3>
              <h3>Dharmapuri(dt),</h3>
              <h3>Tamilnadu 636808.</h3>
            </div>
          </div>
        </div>
    </Element>
  )
}

export default Contact