import React from 'react'
import "./Homecontent.css"
import pic from "./pirai1.png"

const Homecontent = () => {
  return (
    <div className='home_content'>
      <div className='pic-container'>
        <img src={pic} className="pic" alt='img' height='400px' width="330px"/>
      </div>
      <div className='home_container'>
        <h1 className='home-details'>Hello, I'm <span>V.Piraisoodan</span></h1>
        <p>I'm a <span>MERN</span> stack developer</p>
      </div>
    </div>
  )
}

export default Homecontent
// ../components/content/