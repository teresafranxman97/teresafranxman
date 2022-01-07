import React from "react";
import NavLinks from "./NavLinks";
import NavStyles from "../../Styles/NavbarStyles/navbar-styles";

function Navbar() {
	return (
		<NavStyles>
			<nav>
				<div className="links">
					<NavLinks />
				</div>
			</nav>
		</NavStyles>
	);
}

export default Navbar;
