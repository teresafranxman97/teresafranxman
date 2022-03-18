import React, { useState } from "react";
import {
	ProjectsStyles,
	ContentGrid,
	Container,
} from "../Styles/Sections/ProjectsStyles";
import data from "../DataFiles/data";
import Title from "../Components/Title";
import { Icon } from "@iconify/react";

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
		<ProjectsStyles>
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
							<img src={project.src} alt={project.alt} />
						</Container>
					);
				})}
			</ContentGrid>
			{modal ? (
				<div className={modal ? "modal open" : "modal"}>
					<Icon icon="ci:close-small" onClick={() => setModal(false)} />
					<Title title={title}></Title>
					<h3>{position}</h3>
					<p>{description}</p>
					<h4>{stack}</h4>
					<div className="icons">
						<a href={githubLink}>
							<Icon
								icon="codicon:github-alt"
								style={{ color: "#3f3565", marginRight: "1rem" }}
								className="icon"
								width={25}
							/>
						</a>
						<a href={site}>
							<Icon
								icon="foundation:page-export"
								style={{ color: "#3f3565" }}
								className="icon"
								width={25}
							/>
						</a>
					</div>
				</div>
			) : (
				""
			)}
		</ProjectsStyles>
	);
};

export default Projects;
