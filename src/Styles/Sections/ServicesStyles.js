import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 10vh 0;

    h1 {
        margin: 5px 0;
    }  
    
    p {
        margin-right: 3vw;
        font-weight: 300;
        font-size: clamp(1rem, 1.25vw, 1.75rem);
    }

    .header {
        margin: 1rem 0;
    }

    @media (min-width: 1023px) {
        padding: 15vh 0;

        .header {
            width: 60vw;
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
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 2px 4px #dfdfdf;
    
    p {
        font-size: 14px;
    }

    h3 {
        margin: .75em 0;
        font-size: 18px;
    }

    .icon {
        color: black;
        width: 3.25rem;
        height: 3.25rem;
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
