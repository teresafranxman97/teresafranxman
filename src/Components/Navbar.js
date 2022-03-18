import React, { useState } from "react";
import {
	NavStyles,
	Menu,
	MenuLink,
	Logo,
	Hamburger,
} from "../Styles/Components/navbar-styles";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../images/Original on Transparent.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavStyles isOpen={isOpen}>
			<Logo>
				<Link to="/">
					<img src={logo} alt="logo" width={35} />
				</Link>
			</Logo>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? (
					<Icon
						style={{ color: "white", marginRight: "1rem" }}
						icon="ep:close-bold"
						width={30}
					/>
				) : (
					<Icon
						style={{ color: "#3F3565" }}
						icon="heroicons-solid:menu-alt-1"
						width={30}
					/>
				)}
			</Hamburger>
			<Menu isOpen={isOpen}>
				<MenuLink>
					<Link to="/tools">Tools</Link>
				</MenuLink>
				<MenuLink>
					<Link to="/services">Services</Link>
				</MenuLink>
				<MenuLink>
					<Link to="/about">About</Link>
				</MenuLink>
				<MenuLink>
					<Link to="/projects">Projects</Link>
				</MenuLink>
				<MenuLink>
					<Link to="/contact">Contact</Link>
				</MenuLink>
			</Menu>
		</NavStyles>
	);
}

export default Navbar;
