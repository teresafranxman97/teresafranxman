import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

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
            width: 50vw;
        }
    }
`

const Content = styled(motion.div) `
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    justify-content: left;
    border: 1px solid #FFFFFF;
    background: #FFFFFF;
    
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
       
    }
`

const ContentContainer = styled.div`
    display: grid;
    gap: 2rem;
    
    @media (min-width: 769px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export { Container, Content, ContentContainer };
