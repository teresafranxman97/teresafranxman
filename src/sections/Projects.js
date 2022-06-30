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
	const [isHovering, setIsHovering] = useState(-1);

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

	const showProject = (i) => {
		setIsHovering(i);
	};

	const hideProject = () => {
		setIsHovering(-1);
	};

	return (
		<ProjectsStyles id="projects">
			<Title title="My work"></Title>
			<ContentGrid>
				{projects.map((project, i) => {
					return (
						<Container
							className="project-img"
							onMouseEnter={() => showProject(i)}
							onMouseLeave={hideProject}
							key={project.id}
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
							{isHovering === i ? (
								<div className="show-project">
									<h6>{project.title}</h6>
									<button>Learn more</button>
								</div>
							) : null }
						</Container>
					);
				})}
			</ContentGrid>
			{modal ? (
				<Modal
					modal={modal}
					setModal={setModal}
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
