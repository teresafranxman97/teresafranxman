import React, { useState } from "react";
import {
	ProjectsStyles,
	ContentGrid,
	Container,
} from "../Styles/Sections/ProjectsStyles";
import data from "../DataFiles/data";
import Title from "../Components/Title";
import Modal from "../Components/Modal";

const Projects = () => {
	const [projects] = useState(data);
	const [modal, setModal] = useState(false);
	const [imgSrc, setImgSrc] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [position, setPosition] = useState("");
	const [stack, setStack] = useState("");
	const [site, setSite] = useState("");
	const [githubLink, setGithubLink] = useState("");

	const getImg = (src) => {
		setImgSrc(src);
		setModal(true);
	};

	const getTitle = (title) => {
		setTitle(title);
	};

	const getDescription = (description) => {
		setDescription(description);
	};

	const getPosition = (position) => {
		setPosition(position);
	};

	const getStack = (stack) => {
		setStack(stack);
	};

	const getSite = (site) => {
		setSite(site);
	};

	const getGithubLink = (githubLink) => {
		setGithubLink(githubLink);
	};

	return (
		<ProjectsStyles id="projects">
			<Title title="My work"></Title>
			<ContentGrid>
				{projects.map((project, index) => {
					return (
						<Container
							className="project-img"
							key={index}
							onClick={() => {
								getImg(project.src);
								getTitle(project.title);
								getDescription(project.description);
								getPosition(project.position);
								getStack(project.stack);
								getSite(project.site);
								getGithubLink(project.githubLink);
							}}
						>
							<div className="img-container">
								<img src={project.src} alt={project.alt} />
							</div>
							<p>{project.title}</p>
						</Container>
					);
				})}
			</ContentGrid>
			{modal ? (
				<Modal
					modal={modal}
					setModal={setModal}
					title={title}
					position={position}
					description={description}
					stack={stack}
					githubLink={githubLink}
					site={site}
				/>
			) : (
				""
			)}
		</ProjectsStyles>
	);
};

export default Projects;
