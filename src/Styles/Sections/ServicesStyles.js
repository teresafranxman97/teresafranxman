import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10vh;
    padding-left: 2rem;
    padding-right: 2rem;
    min-height: 100vh;

    h1 {
        margin: 5px 0;
    }  
    
    p {
        margin: 0;
        font-weight: 300;
        font-size: 23px;
    }

    @media (min-width: 1024px) {
        .header {
            width: 60%;
        }
    }

    @media (min-width: 1023px) {
        padding-left: 10rem;
        padding-right: 10rem;
    }
`

const Content = styled(motion.div) `
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    justify-content: left;
    padding: 2rem;
    
    p {
        
        font-weight: 200;
        font-size: 18px;
    }

    h3 {
        margin: 1em;
    }

    .icon {
        color: #FF00B2;
        width: 3.25rem;
        height: 3.25rem;
    }

    @media (min-width: 1023px) {
        padding: 3rem;
    }
`

const ContentContainer = styled.div`
    display: grid;
    gap: 2rem;
    margin-top: 5vh;
    
    @media (min-width: 769px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export { Container, Content, ContentContainer };
