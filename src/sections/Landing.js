import React from "react";
import Services from "./Services";
import Tools from "./Tools";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Button from "../Components/button";
import {
	Styled,
	Container,
	IconsContainer,
} from "../Styles/Sections/landingPageStyles";
import { Icon } from "@iconify/react";
import abstract from "../images/purpleabstract.png";

const Landing = () => {
	return (
		<Styled id="/">
			<Container>
				<div className="img-container">
					<img src={abstract} alt="purple abstract geometric shapes" />
				</div>
				<div className="content">
					<h1>Hi, I'm Teresa</h1>
					<p>
						I am a Front End Developer currently focusing on building quality
						digital experiences. With a love for design and a passion for
						building products that are accessible to all, I aim to deliever
						wonderful user-centered web applications.
					</p>
					<Button
						content="Get to know me"
						link="#about"
						primary="false"
					></Button>
				</div>
				{/* <IconsContainer>
					<a href="https://github.com/teresafranxman97">
						<Icon className="icon" icon="codicon:github-alt" width={20} />
					</a>
					<a href="https://linkedin.com/in/teresa-franxman">
						<Icon className="icon" icon="akar-icons:linkedin-fill" width={20} />
					</a>
				</IconsContainer> */}
			</Container>
			<Projects />
			<Services />
			<Tools />
			<About />
			<Contact />
		</Styled>
	);
};

export default Landing;
