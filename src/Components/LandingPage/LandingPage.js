import React from "react";
import { Link } from "react-router-dom";
import Styled from "../../Styles/LandingPageStyles/landingPageStyles";
import { Icon } from "@iconify/react";
import Icons from "../Icons/Icons";

function LandingPage() {
	return (
		<Styled>
			<div className="container">
				<div className="content-container">
					<h1><span>hello</span>,</h1>
					<h2>
						I am Teresa.
					</h2>
					<p>Front End Developer creating quality driven user experiences on the web. </p>
				</div>
				<div className="links-container">
					<Link to="/projects">
						<button>My projects</button>
					</Link>
				</div>
				<div className="icons-content">
					<Icons />
				</div>
			</div>
			<div className="divider">
				
			</div>
		</Styled>
	);
}

export default LandingPage;
