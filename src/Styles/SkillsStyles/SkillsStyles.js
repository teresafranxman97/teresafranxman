import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 10vh;
`

const Content = styled(motion.div) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid lightgrey;
`

const ContentContainer = styled.div`
    display: flex;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`

export { Container, Content, ContentContainer }