import React from "react";
import { Icon } from '@iconify/react';
import TitleStyles from '../Styles/Components/TitleStyles';

const Title = ({ title }) => {
    return (
        <TitleStyles>
            <Icon icon="bi:code" />
                { title }
            <Icon icon="bi:code-slash" />
        </TitleStyles>
    )
}

export default Title;