import React, { useState } from "react";
import data from "./skills-data";
import { Icon } from "@iconify/react";
import StyledSkills from "../../Styles/Skills/skills-styles";

const Skills = () => {
	const [skills] = useState(data);

	return (
		<StyledSkills>
            <h1>Tech Stack</h1>
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

export default Skills;
