import React from "react";
import { ButtonStyles } from "../Styles/Components/ButtonStyles";
import { HashLink as Link } from "react-router-hash-link";

const Button = ({ content, link, primary = false }) => {
	return (
		<ButtonStyles primary={primary} className="projects-button">
			<Link smooth to={link}>{content}</Link>
		</ButtonStyles>
	);
};

export default Button;
