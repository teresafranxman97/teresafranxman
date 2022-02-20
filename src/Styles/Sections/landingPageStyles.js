import styled from "styled-components";
import { motion } from 'framer-motion/dist/framer-motion';

const Styled = styled.div`
	a {
		text-decoration: none;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 80vh;
	justify-content: center;
`

const Content = styled.div`
	text-align: center;
	
	h1 {
		font-size: clamp(1rem, 1.2vw, 4rem);
		font-weight: 600;
		height: 1px;
	}

	p {	
		font-weight: 300;
		font-size: clamp(1rem, 2.85vw, 2rem); 
	}

`

const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 2rem;

    .icon {
        padding: .5em;
        color:  #D6ABBE;
    }

    @media (max-width: 1023px) {

		justify-content: center;
	}
`

export { Styled, Container, IconsContainer, Content };
