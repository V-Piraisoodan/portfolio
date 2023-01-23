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
              <a href='https://www.linkedin.com/in/v-piraisoodan-a953181bb/' target="_blank" rel='noopener noreferrer'>
                <IconButton>
                  <LinkedInIcon className='linked' color='primary'/>
                </IconButton>
              </a>
            </div>
          </div>
          <div className='con-address'>
            <div className='con-current'>
              <p className='add-tittle'>Temperory Address </p>
              <p>Ramachandrapura,</p>
              <p>Jalahalli East,</p>
              <p>Bengaluru,</p>
              <p>Karnataka 560097.</p>
            </div>
            <div className='con-permanent'>
              <p className='add-tittle'>Permanent Address </p>
              <p>Somanahalli(vill),</p>
              <p>Palacode(tk),</p>
              <p>Dharmapuri(dt),</p>
              <p>Tamilnadu 636808.</p>
            </div>
          </div>
        </div>
    </Element>
  )
}

export default Contact