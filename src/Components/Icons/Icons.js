import { Icon } from "@iconify/react";
import React from "react";
import IconStyles from "../../Styles/LandingPageStyles/IconStyles";

const Icons = () => {
    return (
        <IconStyles>
            <Icon className="icon" icon="codicon:github-alt" width={20} />
            <Icon className="icon" icon="akar-icons:linkedin-fill" width={20} />
        </IconStyles>
    )
}

export default Icons;
