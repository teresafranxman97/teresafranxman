import React from "react";
// import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Button from "../Components/button";
import geometricShapes from "../images/shapes.png";
import { Icon } from "@iconify/react";
import {
	Styled,
	Container,
	IconsContainerOuter,
} from "../Styles/Sections/landingPageStyles";
import { ThemeProvider } from "styled-components";
import { invertTheme, theme } from "../Styles/Components/ButtonStyles";

const Landing = () => {
	return (
		<ThemeProvider theme={theme}>
			<Styled id="/">
				<Container>
					<div className="content-container">
						<h1>
							Crafting solutions through <br /> digital experiences
						</h1>
						<p>
							Hi! I’m Teresa Franxman, a Front End Developer focused on builing
							user centered products for the web.
						</p>
						<div className="buttons">
							<Button content="View My Work" link="#contact"></Button>

							<ThemeProvider theme={invertTheme}>
								<Button content="Get To Know Me" link="#about"></Button>
							</ThemeProvider>
						</div>
						<IconsContainerOuter>
							<h6>Let's Connect</h6>
							<div  className="icons">
								<Icon
									icon="akar-icons:github-fill"
									width={20}
									style={{ color: "#303336" }}
								/>
								<Icon
									icon="akar-icons:linkedin-box-fill"
									width={20}
									style={{ color: "#303336" }}
								/>
								<Icon
									icon="ant-design:mail-filled"
									width={20}
									style={{ color: "#303336" }}
								/>
							</div>
						</IconsContainerOuter>
					</div>
					<div className="image-container">
						<img src={geometricShapes} alt="geometric shapes" />
					</div>
				</Container>
				<About />
				{/* <Services /> */}
				<Projects />
				<Contact />
			</Styled>
		</ThemeProvider>
	);
};

export default Landing;
