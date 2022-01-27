import React from "react";
import { Link } from "react-router-dom";
import { Styled, Button } from "../../Styles/LandingPageStyles/landingPageStyles";
import Icons from "../icons/Icons";
import { Icon } from '@iconify/react';
import IconStyles from "../../Styles/LandingPageStyles/IconStyles";

function LandingPage() {
	return (
		<Styled>
			<div className="container">
				<div className="content">
					<h1>Hi, I am Teresa.</h1>
					<p>Front End Developer <br/> & <br/> UI/UX Designer </p>
					<Button>
						<Link to="/projects">
							Projects
						</Link>
					</Button>
				</div>
			</div>
			<IconStyles className="icons-content">
				<Icons />
				<div>
					<Icon icon="bi:arrow-down-circle" />
				</div>
			</IconStyles>
		</Styled>
	);
}

export default LandingPage;
