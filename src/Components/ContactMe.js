import React from "react";
import ContactMeStyles from "../Styles/Components/ContactMeStyles";
import { Link } from 'react-router-dom';

const ContactMe = () => {
    return (
        <ContactMeStyles>
            <p>Have an idea you want to discuss? Send me a message! </p>
            <Link to="/contact">Contact me</Link>
        </ContactMeStyles>
    )
}

export default ContactMe;