import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const TitleStyles = styled(motion.div) `
    font-size: clamp(1.75rem, 2vw, 2rem);
    font-weight: 800;
`

export default TitleStyles;
