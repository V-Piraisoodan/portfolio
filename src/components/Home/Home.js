import React from 'react'
import { Element } from 'react-scroll';
import Homecontent from '../Homecontent/Homecontent';
import "./Home.css";

const Home = () => {
  return (
    // linkto name and element name should be same
    <Element name='home' className= "home">
       <Homecontent/>
    </Element>
  )
}

export default Home