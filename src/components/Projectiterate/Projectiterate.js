import React from 'react'
import { Element } from 'react-scroll'
import Projects from '../Projects/Projects'
import "./Projectiterate.css"
import bulk from "./bulkmail.png";
import movie from "./movie.png";
import payment from "./payment.png";
import todo from "./todo.png"

const Projectiterate = () => {
    const projects = [{
        pics : bulk,
        tittle : "Bulk email tool",
        desc : "Bulk email is the act of sending one email campaign to a large group at once",
        link : "https://bulkemail-vpiraisoodan-frontend.netlify.app/",
        front : "https://github.com/V-Piraisoodan/bulkemailtool-vpiraisoodan-frontend",
        back : "https://github.com/V-Piraisoodan/bulkemailtool-vpiraisoodan-backend",
        tech : "React JS, Node JS, Express JS, MongoDB, Material UI.",
    },
    {
        pics : movie,
        tittle : "Movie App",
        desc : "A progressive web app where users can explore a wide range of movies.We can update and delete the details of any existing movie in the app.",
        link : "https://v-piraisoodan-movie-app.netlify.app/",
        front : "https://github.com/V-Piraisoodan/newMovieapp",
        back : "https://github.com/V-Piraisoodan/movieapp-node",
        tech : "React JS, Node JS, Express JS, MongoDB, Material UI.",
    },{
        pics : payment,
        tittle : "Payment Integration App",
        desc : "Once we place the order we can find the payment pop-up.Order will be placed and the payment will be successfull.",
        link : "https://v-piraisoodan-payment-app.netlify.app/",
        front : "https://github.com/V-Piraisoodan/paymentApp-client",
        back : "https://github.com/V-Piraisoodan/paymentApp-server",
        tech : "React JS, Node JS, Express JS, MongoDB, React-redux, Material UI, Stripe."
    },{
        pics : todo,
        tittle : "ToDo App",
        desc : "User can Create, Read, Update, Delete the data using CRUD operation and will be stored in the Database.",
        link : "https://v-piraisoodan-todoapp.netlify.app/",
        front : "https://github.com/V-Piraisoodan/todoClient",
        back : "https://github.com/V-Piraisoodan/todoServer",
        tech : "React JS, Node JS, Express JS, MongoDB.",
    }]
    // console.log(projects)
  return (
    <Element className="project-container" name="projects">
    <h2>Projects</h2>
    <section className='all-projects'>
        {
            projects.map(({pics,tittle,desc,link,front,back,tech},index)=>{
                return(
                    <Projects 
                        key={index} 
                        pics = {pics} 
                        tittle={tittle} 
                        desc={desc} 
                        link={link} 
                        front={front} 
                        back={back}
                        tech={tech} />
                )
            })
        }
    </section>
</Element>

  )
}

export default Projectiterate