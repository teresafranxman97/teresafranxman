import React from "react";

import Title from "../Components/Title";
import Button from "../Components/button";
import photo from "../images/portfolio.jpg";
import {
	Styles,
	ImageContainer,
	ContentContainer,
	Wrapper,
} from "../Styles/Sections/AboutStyles";

const About = () => {
	return (
		<Styles id="about">
			<Wrapper>
				<ImageContainer>
					<div class="top"></div>
					<div class="left"></div>
					<div className="img-wrapper">
						<img src={photo} alt=" portrait of creator" />
					</div>
					<div class="bottom"> </div>
					<div class="right"> </div>
				</ImageContainer>
				<ContentContainer>
					<div className="content-wrapper">
						<Title title="Get To Know Me" />
						<p>
							Hello there! <br /> I’m Teresa Franxman, a Frontend Developer and
							recent graduate of Bloom Institute of Technology. With a passion
							for understanding how we, as developers, can improve
							accessibility, usability and overall aesthetics of a product, I am
							dedicated to delivering sophisticated user centered experiences.
							When I’m not busy coding you can find me hiking, spending time
							with my family or improving my design skills.
						</p>
					</div>
					<div>
						<Button
							content="Download CV"
							link="#about"
							primary="false"
						></Button>
					</div>
				</ContentContainer>
			</Wrapper>
		</Styles>
	);
};

export default About;
