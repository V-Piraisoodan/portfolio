import React from "react";
import About from "./components/Aboutme/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Headers from "./components/headers/headers"
import Home from "./components/Home/Home";
import Projectiterate from "./components/Projectiterate/Projectiterate";
// import Projects from "./components/Projects/Projects";
import Skill from "./components/Skillcontainer/Skill";

const App = ()=>{
  return (
    <div>
      <Headers/>
      <Home/>
      <About/>
      <Skill/>
      <Projectiterate/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App;
