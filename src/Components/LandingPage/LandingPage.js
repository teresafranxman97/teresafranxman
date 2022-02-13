import React, { useState } from "react";
import { motion } from 'framer-motion/dist/framer-motion';
import { Link } from "react-router-dom";
import {
	Styled,
	Button,
	ButtonContainer,
	Container,
	IconsContainer, 
	Content, 
	MidContent
} from "../../Styles/LandingPageStyles/landingPageStyles";
import { Icon } from '@iconify/react';
import image from '../../images/me.png';

function LandingPage() {

	return (
		<Styled>
			<MidContent>
				<div className="circle"></div>
				<img src={image} />
			</MidContent>
			<Container >
				<Content>
					<h1>Hi, I am Teresa <Icon icon="mdi:hand-wave-outline" /> </h1>
 					<p>Front End Developer creating exceptional user experiences on the web</p>
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
		</Styled>
	);
}

export default LandingPage;
