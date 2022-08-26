import React from "react";
import {ButtonStyles} from "../Styles/Components/ButtonStyles";

const Button = ({ content, link}) => {
	return (
		<ButtonStyles className="projects-button">
			<a href={link}>{content}</a>
		</ButtonStyles>
	);
};

export default Button;
