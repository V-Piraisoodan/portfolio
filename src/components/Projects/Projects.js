import React, { useState } from 'react'
import "./Projects.css"

const Projects = ({pics,tittle,desc,link,front,back}) => {
    const [show , setshow] = useState(false)
  return (
        <div className='pro-container'>
           <div className='pro-content' 
             onMouseEnter={()=>setshow(true)} 
             onMouseLeave={()=>setshow(false)}>
               {
                show ?
                (  <div className='project-content'>
                     <h3>{tittle}</h3>
                     <p>{desc}</p>
                   </div>) : 
                  (<img className='project-img' src={pics} alt={tittle}/>)
                }
            </div>
            <div className='btn-container'>
                <div className='demo-btn'>
                    {/* <button onClick={()=><a href={link} target="_blank" rel='noopener noreferrer'></a>} className='demo'>Demo</button> */}
                    <a href={link} className='demo' target="_blank" rel='noopener noreferrer'>Demo</a>
                </div> 
                <h3 className='src-code'>Source code</h3>
                <div className='source-btn'>
                  <a href={front} className='s-btn' target="_blank" rel='noopener noreferrer'>Front-end</a>
                  <a href={back} className='s-btn' target="_blank" rel='noopener noreferrer'>Back-end</a>
                </div>
           </div>
          
        </div>

    
  )
}

export default Projects