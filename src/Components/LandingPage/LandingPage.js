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
					<h1>
						I AM <span>TERESA</span>
					</h1>
					<div>
						<Icon icon="bi:three-dots" width={90} />
					</div>
					<h1>FRONT END DEVELOPER </h1>
					<h3>&</h3>
					<h1>UI/UX DESIGNER </h1>
				</div>
				<div className="icons-content">
					<Icons />
				</div>
				<div className="links-container">
					<Link to="/projects">
						<button>PROJECTS</button>
					</Link>
					<Link to="/contact">
						<button>CONTACT</button>
					</Link>
				</div>
			</div>
		</Styled>
	);
}

export default LandingPage;
