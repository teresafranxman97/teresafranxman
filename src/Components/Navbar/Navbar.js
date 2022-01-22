import React, { useState } from "react";
import {NavStyles, Menu, MenuLink, Logo, Hamburger} from "../../Styles/NavbarStyles/navbar-styles";
import { Link } from 'react-router-dom';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavStyles isOpen={isOpen} >
			<Logo>
				<Link to="/teresafranxman">tf</Link>
			</Logo>		
			<Hamburger onClick={() => setIsOpen(!isOpen)} >
				<span />
				<span />
				<span />
			</Hamburger>
			<Menu isOpen={isOpen}>
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
