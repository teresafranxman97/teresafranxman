import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Container, Content, ContentContainer } from '../../Styles/SkillsStyles/SkillsStyles';

const Skills = () => {
    return (
        <Container>
            <p className="title">A non-stop learner skilled in design, development and deployment of web applications.</p>
            <ContentContainer>
                <Content 
                    className="content"
                    whileHover={{ scale: 1.1 }}
                >
                    <h1>UI/UX Design</h1>
                    <p>I design products that keep focus on the user in order to create exceptional experiences. </p>
                </Content>
                <Content 
                    className="content"
                    whileHover={{ scale: 1.1 }}
                >
                    <h1>Front End</h1>
                    <p>I utilize various tools and techniques that allow me to bring any idea to life.</p>
                </Content>
                <Content 
                    className="content"
                    whileHover={{ scale: 1.1 }}
                >
                    <h1>Back End</h1>
                    <p>I am knowledgable in server-side development and comfortable working with databases.</p>
                </Content>
            </ContentContainer>
        </Container>
    )
}

export default Skills;
