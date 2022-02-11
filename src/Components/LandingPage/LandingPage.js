import React, { useState } from "react";
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
					<Button>
						<Link to="/projects">
							Projects
						</Link>
					</Button>
					<Button
						primary
					>
						<Link to="/contact">Contact me</Link>
					</Button>
				</ButtonContainer>
				<IconsContainer >
						<Icon className="icon" icon="codicon:github-alt" width={25} />
						<Icon className="icon" icon="akar-icons:linkedin-fill" width={25} />

				</IconsContainer>
			</Container>
		</Styled>
	);
}

export default LandingPage;
