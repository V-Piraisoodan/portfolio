import React from 'react'
import "./Experiencebox.css"

const Experiencebox = ({company,place,state,duration,details}) => {
  return (
    <div className='jobbox-container'>
        <h2 className='job-tittle'>{company}</h2>
        <h3 className='job-duration'>{duration}</h3>
        <div className='job-pl-du'>
           <h3 className='job-place'>{place}</h3>
           <h3 className='job-state'>{state}</h3>
        </div>
        <p className='job-detail'>{details}</p>
    </div>
  )
}

export default Experiencebox