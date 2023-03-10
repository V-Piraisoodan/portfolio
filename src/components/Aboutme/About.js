import React from 'react'
import "./About.css"
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element className='about-container' name="about">
      <div className='about-sub'>
        <h1>About</h1>
        <p><span><img className='about-handimg' alt='handicon' src='https://cdn-icons-png.flaticon.com/512/556/556130.png'></img></span> Hello! I'm V.Piraisoodan,a passionate software engineer.
          <br/><span><img className='about-handimg' alt='handicon' src='https://cdn-icons-png.flaticon.com/512/556/556130.png'></img></span> I develop Full Stack web applications.
          My core skill is based on Javascript.
          <br/><span><img className='about-handimg' alt='handicon' src='https://cdn-icons-png.flaticon.com/512/556/556130.png'></img></span> I would describe myself as a quick-learner,positive and confident individual.
          Passionate towards problem solving.
          <br/><span><img className='about-handimg' alt='handicon' src='https://cdn-icons-png.flaticon.com/512/556/556130.png'></img></span> I completed my B.E ECE in Arunai Engineering College in 2017.
          <br/><span><img className='about-handimg' alt='handicon' src='https://cdn-icons-png.flaticon.com/512/556/556130.png'></img></span> Looking for a job, where I can enhance my learning and utilize my skills.</p>
        <p className='about-course'>
          <h1>Course</h1>
          <p><span className='mern'>MERN</span> Full Stack Development (2022-Present)<br/>
           <span className='guvi'>GUVI Geek Network Pvt Ltd. </span></p>
        </p>
      </div> 
    </Element>
  )
}

export default About