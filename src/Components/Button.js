import React from "react";
import { ButtonStyles } from "../Styles/Components/ButtonStyles";
import { Link } from 'react-router-dom';

const Button = ({ content, link, primary = false }) => {
    return (
        <ButtonStyles
            primary={primary}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="projects-button"
            onClick={() => null}
        >
          <Link to={link}>{content}</Link>
        </ButtonStyles>
    )
}

export default Button;