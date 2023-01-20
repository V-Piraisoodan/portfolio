import React from 'react'
import { Element } from 'react-scroll'
import Projects from '../Projects/Projects'
import "./Projectiterate.css"
import bulk from "./bulkmail.png";

const Projectiterate = () => {
    const projects = [{
        pics : bulk,
        tittle : "Bulk email tool",
        desc : "Bulk email is the act of sending one email campaign to a large group at once",
        link : "https://bulkemail-vpiraisoodan-frontend.netlify.app/",
        front : "https://github.com/V-Piraisoodan/bulkemailtool-vpiraisoodan-frontend",
        back : "https://github.com/V-Piraisoodan/bulkemailtool-vpiraisoodan-backend",
    },
    {
        pics : bulk,
        tittle : "pro1",
        desc : "hi super app",
        link : "gg",
        front : "front",
        back : "back",
    },{
        pics : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        tittle : "pro1",
        desc : "hi super app",
        link : "gg",
        front : "front",
        back : "back",
    },{
        pics : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
        tittle : "pro1",
        desc : "hi super app",
        link : "gg",
        front : "front",
        back : "back",
    }]
    // console.log(projects)
  return (
    <Element className="project-container" name="projects">
    <h2>Projects</h2>
    <section className='all-projects'>
        {
            projects.map(({pics,tittle,desc,link,front,back,},index)=>{
                return(
                    <Projects 
                        key={index} 
                        pics = {pics} 
                        tittle={tittle} 
                        desc={desc} 
                        link={link} 
                        front={front} 
                        back={back} />
                )
            })
        }
    </section>
</Element>

  )
}

export default Projectiterate