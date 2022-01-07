import React, { useState } from "react";
import data from './skills-data';
import { Icon } from '@iconify/react';

const Skills = () => {
    const [skills] = useState(data);

    return (
        <div>
            {skills.map((skill) => (
                <div className="skills-container" key={skill.id}>
                    <Icon icon={skill.icon} alt="logo" width={150} />
                    <h1>{skill.title}</h1>
                </div>    
            ))}
        </div>
    );
}

export default Skills;