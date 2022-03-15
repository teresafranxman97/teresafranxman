import React, { useState } from "react";
import data from "../DataFiles/tools-data";
import { Icon } from "@iconify/react";
import StyledTools from "../Styles/Sections/toolsStyles";
import Title from "../Components/Title";

const Tools = () => {
	const [skills] = useState(data);

	return (
		<StyledTools>
			<div className="title-container">
				<Title title="Toolkit"></Title>
				<p>
					Skilled in design, development and deployment of web applications. I
					utilize various frameworks, libraries and tools to build exceptional
					experiences.{" "}
				</p>
			</div>
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
