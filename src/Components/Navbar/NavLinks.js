import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
	return (
		<nav>
			<NavLink activeClassName="active" to="/projects">
				PROJECTS
			</NavLink>
			<NavLink activeClassName="active" to="/skills">
				SKILLS
			</NavLink>
			<NavLink activeClassName="active" to="/contact">
				CONTACT
			</NavLink>
		</nav>
	);
};

export default NavLinks;
