import React from "react";
import {NavStyles, Menu, MenuLink, Logo, Hamburger} from "../../Styles/NavbarStyles/navbar-styles";
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<NavStyles>
			<Logo>
				<Link to="/teresafranxman">tf</Link>
			</Logo>		
			<Hamburger>
				<span />
			</Hamburger>
			<Menu>
			<MenuLink>
				<Link to="/projects">Projects</Link>
			</MenuLink>
			<MenuLink>
				<Link to="/tools">Tool-Kit</Link>
			</MenuLink>
			<MenuLink>
				<Link to="/contact">Contact</Link>
			</MenuLink>
			</Menu>
		</NavStyles>
	);
}

export default Navbar;
