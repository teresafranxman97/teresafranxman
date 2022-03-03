import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Container, Content, ContentContainer } from '../Styles/Sections/ServicesStyles';
import { Icon } from '@iconify/react';
import Title from '../Components/Title';

const Services = () => {
    return (
        <Container>
            <div className="header">
                <Title
                    title="Services"
                ></Title>
                <p>As a Front End Developer I offer a variety of services. <br/>
                From design, to development and even deployment of web applications
                </p>
            </div>
            <ContentContainer>
                <Content 
                    className="content"
                    whileHover={{ scale: 1.1 }}
                >
                    <Icon className="icon" icon="ic:twotone-design-services"/>
                    <h3>Web Design</h3>
                    <p>I design products that prioritize the user in order to provide exceptional experiences. </p>
                </Content>
                <Content 
                    className="content"
                    whileHover={{ scale: 1.1 }}
                >
                    <Icon className="icon" icon="ic:baseline-developer-mode"/>
                    <h3>Front End Development</h3>
                    <p>I utilize various tools and techniques that allow me to bring any idea to life.</p>
                </Content>
                <Content 
                    className="content"
                    whileHover={{ scale: 1.1 }}
                >
                    <Icon className="icon" icon="bxs:data" />
                    <h3>Back End Development</h3>
                    <p>I am knowledgable in server-side development and comfortable working with databases.</p>
                </Content>
            </ContentContainer>
        </Container>
    )
}

export default Services;
