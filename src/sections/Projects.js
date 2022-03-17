import React, { useState } from "react";
import {ProjectsStyles, Content, Container} from "../Styles/Sections/ProjectsStyles";
import data from "../DataFiles/data";
import Title from "../Components/Title";

const Projects = () => {
	const [projects] = useState(data);

	return (
		<ProjectsStyles>
			<Title title="My work"></Title>
				{projects.map((project) => (
					<Container className="project-content" key={project.id}>
						<img src={project.src} alt={project.alt} />
						<Content>
							<h1>{project.title}</h1>
							<p>{project.description}</p>
							<h4>{project.stack}</h4>
						</Content>
					</Container>
				))}
		</ProjectsStyles>
	);
};

export default Projects;
