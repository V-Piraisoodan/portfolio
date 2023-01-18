import React from 'react'
import { Element } from 'react-scroll'
import skillpic from "./skill1.png"
import "./skill.css"
import { LinearProgress } from '@mui/material'

const Skill = () => {
  return (
    <Element name='skills' className="skill-container">
        <div className='skill-img'>
            <img src={skillpic} alt='skill'/>
        </div>
        <div className='skill-details'>
            <h2>Skills</h2>
            <div className='skill-sets'>   
              <h5>React</h5>
              <div className='skill-progress react'>
                 <LinearProgress variant='determinate' value={85}/>
              </div>
            </div>   

            <div className='skill-sets'>   
              <h5>Node Js</h5>
              <div className='skill-progress node'>
                 <LinearProgress variant='determinate' value={75}/>
              </div>
            </div>  

            <div className='skill-sets'>   
              <h5>JavaScript</h5>
              <div className='skill-progress js'>
                 <LinearProgress variant='determinate' value={80}/>
              </div>
            </div>  

            <div className='skill-sets'>   
              <h5>Mongo Db</h5>
              <div className='skill-progress mongo'>
                 <LinearProgress variant='determinate' value={85}/>
              </div>
            </div>  

            <div className='skill-sets'>   
              <h5>My SQL</h5>
              <div className='skill-progress sql'>
                 <LinearProgress variant='determinate' value={75}/>
              </div>
            </div> 

            <div className='skill-sets'>   
              <h5>HTML</h5>
              <div className='skill-progress html'>
                 <LinearProgress variant='determinate' value={86}/>
              </div>
            </div> 

            <div className='skill-sets'>   
              <h5>CSS</h5>
              <div className='skill-progress css'>
                 <LinearProgress variant='determinate' value={83}/>
              </div>
            </div> 

        </div>
    </Element>
  )
}

export default Skill