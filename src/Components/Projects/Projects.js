import React from "react"; 

const Projects = (props) => {
    const { projects} = props;

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            {projects.map((project) => (
                <div className="project-container" key={project.id}>
                    <h1>{project.title}</h1>
                    <h3>{project.description}</h3>
                    <img src={ project.src } alt="google-clone" width={400} />
                </div>   
            ))}
        </div>
    )
};

export default Projects;