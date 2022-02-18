import React, { useState } from "react";
import data from "../DataFiles/tools-data";
import { Icon } from "@iconify/react";
import StyledTools from "../Styles/Sections/toolsStyles";

const Tools = () => {
	const [skills] = useState(data);

	return (
		<StyledTools>
            <h1>Tools I use to plan, design, and build quality applications. </h1>
			<div className="content-grid">
				{skills.map((skill) => (
					<div className="skills-container" key={skill.id}>
						<Icon icon={skill.icon} alt="logo" width={40} className="icon" />
						<h3>{skill.title}</h3>
					</div>
				))}
			</div>
		</StyledTools>
	);
};

export default Tools;
