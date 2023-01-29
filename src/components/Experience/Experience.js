import React from 'react'
import { Element } from 'react-scroll'
import Experiencebox from '../Experiencebox/Experiencebox'
import "./Experience.css"


const Experience = () => {
  const jobs = [{
    company : "Sangamithra Rural Financial Services",
    place : "Hosur ,",
    state : "Tamilnadu.",
    duration : "(2018-2020)",
    details1 : "1). I was working as a Credit Officer at Sangamithra Rural Financial Services in Shoolagiri.",
    details2 : "2). There I had maintained more than hundred and ten groups under my control,thus I can make better communication with people.",
    details3 : "3). As a Credit Officer,I had to verify all documents and to sanction loan for the eligible group.",
  },{
    company : "Transcal",
    place : "Bangalore ,",
    state : "Karnataka.",
    duration : "(2020-Present)",
    details1 : "1). Responsible for the calibration, repair of Thermal, humidity, Pressure sensors, data recorders, high accuracy processes and environmental monitoring.",
    details2 : "2). Responsible for all measurement methods, measurement standards, measurement uncertainty calculations, calibration software and other tools that are used in the calibration laboratory.",
    details3 : "3). Set-up, maintain and document a quality system for the calibration laboratory that fulfills ISO 17025 requirements.",
  }]
  return (
    <Element name='experience' className='experience-container'>
       <h1>Experience</h1>
       <section className='experience'>
          {
            jobs.map(({company,place,state,duration,details1,details2,details3},index)=>{
              return (
                <Experiencebox
                  key={index}
                  company={company}
                  place={place}
                  state={state}
                  duration={duration}
                  details1={details1}
                  details2={details2}
                  details3={details3}/>
              )
            })
          }
       </section>
    </Element>
  )
}

export default Experience