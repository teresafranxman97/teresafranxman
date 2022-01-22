import { Icon } from "@iconify/react";
import React from "react";
import IconStyles from "../../Styles/LandingPageStyles/IconStyles";

const Icons = () => {
    return (
        <IconStyles>
            <Icon className="icon" icon="codicon:github-alt" width={30} />
            <Icon className="icon" icon="akar-icons:linkedin-fill" width={30} />
        </IconStyles>
    )
}

export default Icons;
