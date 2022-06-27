import React from "react";
import Services from "./Services";
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
import background from "../images/background.png";

const Landing = () => {
	return (
		<Styled id="/">
			<Container
				className="wrapper"
				style={{
					backgroundImage: `url(${background})`,
					width: "100%",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "top",
					backgroundSize: "cover",
					backgroundAttachment: "fixed",
				}}
			>
					<div className="content">
						<p>
							Crafting <span style={{ color: "#F05F7E" }}>solutions </span>{" "}
							through <br /> digital{" "}
							<span style={{ color: "#29B4EF" }}>experiences</span>
						</p>
						<Button
							content="Get to know me"
							link="#about"
							primary="false"
						></Button>
						<IconsContainer>
							<a href="https://github.com/teresafranxman97">
								<Icon icon="akar-icons:github-fill" color="white" width={20} />
							</a>
							<a href="https://linkedin.com/in/teresa-franxman">
								<Icon
									icon="akar-icons:linkedin-box-fill"
									color="white"
									width={20}
								/>
							</a>
						</IconsContainer>
					</div>
			</Container>
			<About />
			<Services />
			<Projects />
			<Contact />
		</Styled>
	);
};

export default Landing;
