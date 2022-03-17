import React from "react";
import { ButtonStyles } from "../Styles/Components/ButtonStyles";
import { Link } from "react-router-dom";

const Button = ({ content, link, primary = false }) => {
	return (
		<ButtonStyles primary={primary} className="projects-button">
			<Link to={link}>{content}</Link>
		</ButtonStyles>
	);
};

export default Button;
