import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Styled,
	Button,
	ButtonContainer,
	Container,
	IconsContainer, 
	Content
} from "../../Styles/LandingPageStyles/landingPageStyles";
import { Icon } from '@iconify/react';
import gradient from '../../images/blurry-gradient-haikei.svg';

function LandingPage() {

	return (
		<Styled
			style= {{
				backgroundImage: `url(${gradient})`,
				backgroundSize: "cover",
				height: "89vh",
				borderBottomLeftRadius: "91vw",
			}}
		>
			<Container >
				<Content>
					<h1>Hi, I am Teresa <Icon icon="mdi:hand-wave-outline" /> </h1>
					<p>Front End Developer <br/> & <br/> UI/UX Designer </p>
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
			</Container>
			<IconsContainer >
				<div className="left-icons">
					<Icon className="icon" icon="codicon:github-alt" width={25} />
            		<Icon className="icon" icon="akar-icons:linkedin-fill" width={25} />
				</div>
				<div>
					<Icon className="icon" icon="bi:arrow-down" width={25} />
				</div>
			</IconsContainer>
		</Styled>
	);
}

export default LandingPage;
