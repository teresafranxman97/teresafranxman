import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

const TitleStyles = styled(motion.div)`
	font-size: clamp(1.5rem, 2vw, 4rem);
	font-weight: 700;
	color: #3f3565;
`;

export default TitleStyles;
