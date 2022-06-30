import React from "react";
import TitleStyles from '../Styles/Components/TitleStyles';

const Title = ({ title }) => {
    return (
        <TitleStyles>{ title }
        <span></span>
        </TitleStyles>
    )
}

export default Title;