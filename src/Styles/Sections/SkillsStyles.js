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
        font-size: clamp(2rem, 2vw, 3rem);
        font-weight: 300;
        margin: 5px 0;
    }  
    
    p {
        margin: 0;
        font-size: clamp(.85rem, 1.25vw, 2rem);
    }

    @media (min-width: 1024px) {
        .header {
            width: 60%;
        }
    }

    @media (min-width: 769px) {
        padding-left: 6rem;
        padding-right: 6rem;
    }
`

const Content = styled(motion.div) `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 2rem;
    
    p {
        
        font-weight: 100;
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
        height: 70vh;
    }
`

export { Container, Content, ContentContainer }