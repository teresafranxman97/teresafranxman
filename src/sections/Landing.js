import React from "react";
import Services from "./Services";
import Tools from "./Tools";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import {
	Styled,
	Container,
	IconsContainer, 
	Content, 
} from "../Styles/Sections/landingPageStyles";
import { ButtonContainer } from "../Styles/Components/ButtonStyles";
import { Icon } from '@iconify/react';
import Button from "../Components/button";
import illustration from '../images/undraw_website.svg';

function Landing() {
	return (
		<Styled>
			<Container>
				<div className="content-container left-container">
					<Content>
						<h1>Hi, I'm Teresa </h1>
						<p>I am a Front End Developer focusing on creating quality, user-centered digital experiences.</p>
					</Content>
					<ButtonContainer>
						<Button
							content="Projects"
							link="/projects"
						></Button>
						<Button
							primary="true"
							content="Get to know me"
							link="/about"
						></Button>
					</ButtonContainer>
					<IconsContainer >
						<a href="https://github.com/teresafranxman97">
							<Icon className="icon" icon="codicon:github-alt" width={25} />
						</a>
						<a href="https://linkedin.com/in/teresa-franxman">
							<Icon className="icon" icon="akar-icons:linkedin-fill" width={25} />
						</a>
					</IconsContainer>
				</div>
				<div className="content-container right-container">
					<img src={illustration} />
				</div>
			</Container>
			{/* <Services />
			<Tools />
			<Projects />
			<About />
			<Contact /> */}
		</Styled>
	);
}

export default Landing;
