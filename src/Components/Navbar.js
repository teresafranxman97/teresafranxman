import React, { useState } from "react";
import {
	NavStyles,
	Menu,
	MenuLink,
	Logo,
	Hamburger,
} from "../Styles/Components/navbar-styles";
import { Icon } from "@iconify/react";
import logo from "../images/White on Transparent.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavStyles isOpen={isOpen}>
			<Logo>
				<a href="#/">
					<img className="logo" src={logo} alt="logo" width={45} />
				</a>
			</Logo>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? (
					<Icon
						style={{ color: "white", marginRight: "1rem" }}
						icon="ep:close-bold"
						width={30}
					/>
				) : (
					<Icon style={{ color: "white" }} icon="ci:menu-alt-05" width={30} />
				)}
			</Hamburger>
			<Menu isOpen={isOpen}>
				<MenuLink>
					<a href="#about">About</a>
				</MenuLink>
				{/* <MenuLink>
					<a href="#services">Services</a>
				</MenuLink> */}
				<MenuLink>
					<a href="#projects">Projects</a>
				</MenuLink>
				<MenuLink className="contact">
					<a href="#contact">Contact</a>
				</MenuLink>
			</Menu>
		</NavStyles>
	);
}

export default Navbar;
