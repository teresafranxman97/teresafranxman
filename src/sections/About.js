import React from "react";
import Title from "../Components/Title";
import { Styles, ContentContainer } from "../Styles/Sections/AboutStyles";
import image from "../images/me.jpg";

const About = () => {
	return (
		<Styles>
			<Title title="Get to know me"></Title>
			<ContentContainer>
				<img src={image} alt="teresa-image" />
				<p>
					Hello again! <br />
					I’m Teresa Franxman, a Front End Engineer who’s specializing in the
					development of quality user-centered digital experiences. With a
					passion for designing products that focus on user usability, I aim to
					deliver effective, accessible and sophisticated web applications. As a
					recent graduate of Bloom Institute of Technology I have many valuable
					skills in web design, object-oriented programming, computer science as
					well as how to efficiently work within a cross functional team of
					individuals. Though I am now a proud graduate, I am eager to continue
					expanding my knowledge of web design and development.
				</p>
			</ContentContainer>
		</Styles>
	);
};

export default About;
