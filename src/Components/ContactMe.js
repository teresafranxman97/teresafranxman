import React from "react";
import ContactMeStyles from "../Styles/Components/ContactMeStyles";
import Button from './button';
import { Link } from 'react-router-dom';

const ContactMe = () => {
    return (
        <ContactMeStyles>
            <p>Have an idea you want to discuss? Send me a message! </p>
            <Button
                content="Contact me"
                link="/contact"
            ></Button>
        </ContactMeStyles>
    )
}

export default ContactMe;