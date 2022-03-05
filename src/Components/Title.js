import React from "react";
import TitleStyles from '../Styles/Components/TitleStyles';
import {Icon} from "@iconify/react";

const Title = ({ title }) => {
    return (
        <TitleStyles>{ title }
        </TitleStyles>
    )
}

export default Title;