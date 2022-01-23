import React from "react";
import { Link } from "react-router-dom";
import { Styled, Button } from "../../Styles/LandingPageStyles/landingPageStyles";
import Icons from "../Icons/Icons";
import IconStyles from "../../Styles/LandingPageStyles/IconStyles";

function LandingPage() {
	return (
		<Styled>
			<div className="container">
				<div className="content">
					<h1>I am <br/> Teresa.</h1>
					<p>Front End Developer creating quality driven user experiences on the web. </p>
					<Button>
						<Link to="/projects">
							My projects
						</Link>
					</Button>
				</div>
			</div>
			<IconStyles className="icons-content">
				<Icons />
			</IconStyles>
		</Styled>
	);
}

export default LandingPage;
