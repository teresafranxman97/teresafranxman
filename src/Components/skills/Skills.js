import React from "react";
import { Container, Content, ContentContainer } from '../../Styles/SkillsStyles/SkillsStyles';

const Skills = () => {
    return (
        <Container>
            <p>Skilled in design, development and deployment of web applications.</p>
            <ContentContainer className="container">
                <Content className="content">
                    <h1>Design</h1>
                    <p>Creating wireframes, conducting research, creating prototypes</p>
                </Content>
                <Content className="content">
                    <h1>Front-End</h1>
                    <p>Creating wireframes, conducting research, creating prototypes</p>
                </Content>
                <Content className="content">
                    <h1>Back-End</h1>
                    <p>Creating wireframes, conducting research, creating prototypes</p>
                </Content>
            </ContentContainer>
        </Container>
    )
}

export default Skills;
