import React from 'react'
import { Element } from 'react-scroll'
import Projects from '../Projects/Projects'
import "./Projectiterate.css"
// import bulk from "./bulkmail.png";

const Projectiterate = () => {
    const projects = [{
        pics : "https://github.com/V-Piraisoodan/port-img/blob/main/bulkmail.png?raw=true",
        tittle : "Bulk mail sender",
        desc : "hi super app hhh kkk k lllllll iioioi ggggggh",
        link : "https://bulkemail-vpiraisoodan-frontend.netlify.app/",
        front : "https://github.com/V-Piraisoodan/bulkemailtool-vpiraisoodan-frontend",
        back : "https://github.com/V-Piraisoodan/bulkemailtool-vpiraisoodan-backend",
    },
    {
        pics : "https://media.istockphoto.com/id/175633219/photo/bangalore-or-bengalurucity-scape-with-green-trees-on-foreground.jpg?s=612x612&w=0&k=20&c=XoRqItFjHC4UxbiQ-Pa6EkQ7_Tkm-THhhBL7SX8GtfE=",
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