import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProjectsStyles from "../Styles/Sections/ProjectsStyles";
import data from '../DataFiles/data';

const Projects = () => {
	const [projects] = useState(data);

	return (
		<ProjectsStyles>
			<h1>Projects</h1>
				<div className="project-container">
					{projects.map((project) => (
						<div className="project-content" key={project.id}>
							<img src={project.src} alt="" />
							<h2>{project.title}</h2>
							<h3>{project.position}</h3>
							<p>{project.description}</p>
							<a href={project.href} >
								{" "}
								View <Icon icon="akar-icons:arrow-right" />{" "}
							</a>
						</div>
					))}
				</div>
		</ProjectsStyles>
	);
};

export default Projects;
