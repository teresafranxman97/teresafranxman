import React, { useState } from "react";
import {
	NavStyles,
	Menu,
	MenuLink,
	Logo,
	Hamburger,
} from "../Styles/Components/navbar-styles";
import { HashLink as Link } from 'react-router-hash-link';
import { Icon } from "@iconify/react";
import logo from "../images/Original on Transparent.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavStyles isOpen={isOpen}>
			<Logo>
				<Link smooth to="#/">
					<img className="logo" src={logo} alt="logo" width={40} />
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
					<Link smooth to="#tools">Tools</Link>
				</MenuLink>
				<MenuLink>
					<Link smooth to="#services">Services</Link>
				</MenuLink>
				<MenuLink>
					<Link smooth to="#about">About</Link>
				</MenuLink>
				<MenuLink>
					<Link smooth to="#projects">Projects</Link>
				</MenuLink>
				<MenuLink>
					<Link smooth to="#contact">Contact</Link>
				</MenuLink>
			</Menu>
		</NavStyles>
	);
}

export default Navbar;
