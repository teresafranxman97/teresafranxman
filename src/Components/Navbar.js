import React, { useState } from "react";
import {
	NavStyles,
	Menu,
	MenuLink,
	Logo,
	Hamburger,
} from "../Styles/Components/navbar-styles";
import { Icon } from "@iconify/react";
import logo from "../images/Grayscale on Transparent.png";
import { ThemeProvider } from "styled-components";
import { ButtonStyles, theme, invertTheme } from "../Styles/Components/ButtonStyles";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ThemeProvider theme={theme}>
			<NavStyles isOpen={isOpen}>
				<Logo>
					<a href="#/">
						<img className="logo" src={logo} alt="logo" width={45} />
					</a>
				</Logo>
				<Hamburger onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<Icon
							style={{ marginRight: "1rem", color: "#FBFBFB" }}
							icon="ep:close-bold"
							width={30}
						/>
					) : (
						<Icon
							style={{ color: "#FBFBFB" }}
							icon="ci:menu-alt-05"
							width={30}
						/>
					)}
				</Hamburger>
				<Menu isOpen={isOpen}>
					<MenuLink>
						<a className="notheme" href="#about">
							About
						</a>
					</MenuLink>
					<MenuLink>
						<a className="notheme" href="#services">
							Services
						</a>
					</MenuLink>
					<MenuLink>
						<a className="notheme" href="#projects">
							Projects
						</a>
					</MenuLink>
					<MenuLink>
						<ThemeProvider theme={invertTheme}>
							<ButtonStyles>
								<a href="#contact">Contact</a>
							</ButtonStyles>
						</ThemeProvider>
					</MenuLink>
				</Menu>
			</NavStyles>
		</ThemeProvider>
	);
}

export default Navbar;
