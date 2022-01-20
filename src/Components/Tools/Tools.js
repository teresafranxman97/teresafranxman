import React, { useState } from "react";
import data from "./tools-data";
import { Icon } from "@iconify/react";
import StyledSkills from "../../Styles/Skills/skills-styles";

const Tools = () => {
	const [skills] = useState(data);

	return (
		<StyledSkills>
            <h1>Tools I use to plan, design, and build quality applications. </h1>
			<div className="content">
				{skills.map((skill) => (
					<div className="skills-container" key={skill.id}>
						<Icon icon={skill.icon} alt="logo" width={80} className="icon" />
						<h3>{skill.title}</h3>
					</div>
				))}
			</div>
		</StyledSkills>
	);
};

export default Tools;
