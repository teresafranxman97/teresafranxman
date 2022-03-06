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
} from "../Styles/Sections/landingPageStyles";
import { Icon } from '@iconify/react';

const Landing = () => {
	return (
		<Styled>
			<Container>
				<div className="content">
					<h1>Hi, I'm Teresa <Icon icon="emojione:hand-with-fingers-splayed" /> </h1>
					<p>I am a passionate Front End Developer focusing on creating quality, user-centered digital experiences that will help grow your business.</p>
				</div>
				<IconsContainer >
					<a href="https://github.com/teresafranxman97">
						<Icon className="icon" icon="codicon:github-alt" width={20} />
					</a>
					<a href="https://linkedin.com/in/teresa-franxman">
						<Icon className="icon" icon="akar-icons:linkedin-fill" width={20} />
					</a>
				</IconsContainer>
			</Container>
			<Projects />
			<Services />
			{/* <Tools /> */}
			{/* <About /> */}
			{/* <Contact /> */}
		</Styled>
	);
}

export default Landing;
