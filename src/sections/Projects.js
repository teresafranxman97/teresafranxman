import React, { useState } from "react";
import ProjectsStyles from "../Styles/Sections/ProjectsStyles";
import data from '../DataFiles/data';
import Title from '../Components/Title';

const Projects = () => {
	const [projects] = useState(data);

	return (
		<ProjectsStyles>
			<Title
				title="My work"
			></Title>
			<div className="project-container">
				{projects.map((project) => (
					<div className="project-content" key={project.id}>
						<a href={project.href} >
							<img src={project.src} alt="" />
						</a>
						<p>{project.title}</p>
					</div>
				))}
			</div>
		</ProjectsStyles>
	);
};

export default Projects;
