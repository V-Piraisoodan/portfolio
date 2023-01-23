import React from 'react'
import "./Experiencebox.css"

const Experiencebox = ({company,place,state,duration,details1,details2,details3}) => {
  return (
    <div className='jobbox-container'>
        <h2 className='job-tittle'>{company}</h2>
        <h3 className='job-duration'>{duration}</h3>
        <div className='job-pl-du'>
           <h3 className='job-place'>{place}</h3>
           <h3 className='job-state'>{state}</h3>
        </div>
        <p className='job-detail'>{details1}</p>
        <p className='job-detail'>{details2}</p>
        <p className='job-detail'>{details3}</p>
    </div>
  )
}

export default Experiencebox