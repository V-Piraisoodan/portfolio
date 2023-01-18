import React from 'react'
import { Element } from 'react-scroll'
import Experiencebox from '../Experiencebox/Experiencebox'
import "./Experience.css"


const Experience = () => {
  const jobs = [{
    company : "Sangamithra Rural Financial Services",
    place : "Hosur ,",
    state : "Tamilnadu.",
    duration : "(2018-2019)",
    details : "dfjgfkjgfjb kklk kkkgh bbbbnnbnb jjjggguuiiugiu nbnbnbjjggjgi jjggnjngngnjgnj djvkdfgjk jdjdfhj jdkjdjdfj fhejhfjehfh jejekfhehfjehfh"
  },{
    company : "Transcal",
    place : "Bangalore ,",
    state : "Karnataka.",
    duration : "(2020-2023)",
    details : "dfjgfkjgfjb djvkdfgjk jdjdfhj jdkjdjdfj fhejhfjehfh jejekfhehfjehfh",
  }]
  return (
    <Element name='experience' className='experience-container'>
       <h1>Experience</h1>
       <section className='experience'>
          {
            jobs.map(({company,place,state,duration,details},index)=>{
              return (
                <Experiencebox
                  key={index}
                  company={company}
                  place={place}
                  state={state}
                  duration={duration}
                  details={details}/>
              )
            })
          }
       </section>
    </Element>
  )
}

export default Experience