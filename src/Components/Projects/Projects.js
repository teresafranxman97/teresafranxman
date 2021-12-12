import React from "react"; 

const Projects = (props) => {

    return (
        <div className="projects-container">
            {props.projects.map((project) => (
                <div className="project-container" key={project.id}>
                    <h1>{project.title}</h1>
                    <h3>{project.description}</h3>
                    <img src={project.image} alt="google-clone" />
                </div>   
            ))}
        </div>
    )
};

export default Projects;