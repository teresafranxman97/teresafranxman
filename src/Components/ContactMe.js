import React from "react";
import ContactMeStyles from "../Styles/Components/ContactMeStyles";
import Button from "./button";

const ContactMe = () => {
	return (
		<ContactMeStyles>
			<p>Have an idea you want to discuss? Send me a message! </p>
			<Button content="Contact me" link="/contact" primary="true"></Button>
		</ContactMeStyles>
	);
};

export default ContactMe;
