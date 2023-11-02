import React from "react";
import Carousel from "./../../Components/Carousel/Carousel"
import "./Projects.css"

const projects = () => {
    return (
        <section id="projects" className="projects">

        <div className="projects-description">
            <h2>Projects</h2>
            <p>In this section you will see the projects that i have done until now, you can see the details of each of these projects on my github.</p>
        
        <Carousel />

        </div>


        </section>
    )
}

export default projects;