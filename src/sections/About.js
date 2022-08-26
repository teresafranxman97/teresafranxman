import React from "react";
import Button from "../Components/button";
import Title from "../Components/Title";
import photo from "../images/portfolio.jpg";
import {
	Styles,
	ImageContainer,
	ContentContainer,
} from "../Styles/Sections/AboutStyles";

const About = () => {
	return (
		<Styles id="about">
			<ImageContainer>
				<img src={photo} alt=" portrait of creator" />
			</ImageContainer>
			<ContentContainer>
				<Title title="About Me"></Title>
				<p>
					I am a certified Full Stack Developer with a focus in Front End Web
					Development. Passionate about creating inclusive user interfaces that
					are accessible to all, responsive across various platforms while
					ensuring to design and build products that are optimized for search
					engines. When I’m not busy coding your can find me hiking, spending
					time with my family or improving my design skills.
				</p>

				<div>
					<h5>Tool's I've Recently Worked With</h5>
					<p>React, Redux, Firebase, JavaScript, Figma, Styled Components</p>
				</div>
				<Button content="Download Resume" link="#about"></Button>
			</ContentContainer>
		</Styles>
	);
};

export default About;
