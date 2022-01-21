import React from "react";
import { Link } from "react-router-dom";
import { Styled, Button } from "../../Styles/LandingPageStyles/landingPageStyles";
import { Icon } from "@iconify/react";
import Icons from "../Icons/Icons";

function LandingPage() {
	return (
		<Styled>
			<div className="container">
				<div className="content-container">
					<h1>I am Teresa.</h1>
					<p>Front End Developer creating quality driven user experiences on the web. </p>
				</div>
				<Link to="/projects">
					<Button>
						My projects
					</Button>
				</Link>
			</div>
			<div className="icons-content">
				<Icons />
			</div>
		</Styled>
	);
}

export default LandingPage;
