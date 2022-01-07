import React from "react";
import { Link } from "react-router-dom";
import NavStyles from "../../Styles/NavbarStyles/navbar-styles";

function Navbar() {
	return (
		<NavStyles>
			<nav>
				<Link className="item" to="/projects">
					PROJECTS
				</Link>
				<Link className="item" to="/skills">
					SKILLS
				</Link>
				<Link className="item" to="/contact">
					CONTACT
				</Link>
			</nav>
		</NavStyles>
	);
}

export default Navbar;
