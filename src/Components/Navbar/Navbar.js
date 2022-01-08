import React from "react";
import NavLinks from "./NavLinks";
import NavStyles from "../../Styles/NavbarStyles/navbar-styles";
import Logo from "./logo";

function Navbar() {
	return (
		<NavStyles>
			<nav>
				<div className="logo-container">
					<Logo />
				</div>
				<div className="links">
					<NavLinks />
				</div>
			</nav>
		</NavStyles>
	);
}

export default Navbar;
