import React, { useState } from "react";
import Services from "./Services";
import Tools from "./Tools";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { motion } from 'framer-motion/dist/framer-motion';
import { Link } from "react-router-dom";
import {
	Styled,
	Container,
	IconsContainer, 
	Content, 
	MidContent
} from "../Styles/Sections/landingPageStyles";
import { Button, ButtonContainer } from "../Styles/Components/ButtonStyles";
import { Icon } from '@iconify/react';

function Landing() {

	return (
		<Styled>
			<Container >
				<Content>
					<h1>Hi, I'm Teresa <Icon icon="mdi:hand-wave-outline" /> </h1>
 					<p>I am a Front End Developer currently focusing on building quality, user-centered interfaces for the web.</p>
				</Content>
				<ButtonContainer>
					<Button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="projects-button"
						onClick={() => null}
					>
						<Link to="/projects">
							Projects
						</Link>
					</Button>
					<Button
						primary
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className="projects-button"
						onClick={() => null}
					>
						<Link to="/contact">Contact me</Link>
					</Button>
				</ButtonContainer>
				<IconsContainer >
					<a href="https://github.com/teresafranxman97">
						<Icon className="icon" icon="codicon:github-alt" width={25} />
					</a>
					<a href="https://linkedin.com/in/teresa-franxman">
						<Icon className="icon" icon="akar-icons:linkedin-fill" width={25} />
					</a>
				</IconsContainer>
			</Container>
			<Services />
			<Tools />
			<Projects />
			<About />
			<Contact />
		</Styled>
	);
}

export default Landing;
