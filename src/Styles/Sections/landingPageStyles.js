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
	width: 100%;
	height: 100vh;
	justify-content: center;
`

const Content = styled.div`
	text-align: center;
	
	h1 {
		font-size: clamp(1rem,1.2vw,3.5rem);
		font-weight: 600;
		height: 1px;
	}

	p {	
		font-weight: 300;
		font-size: clamp(1.2rem, 2.85vw, 4rem); 
	}

	@media (min-width: 1024px) {
		text-align: left;
	}

`

const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 2rem;

    .icon {
        padding: .5em;
        color:  #B2FF00;
    }

    @media (max-width: 1023px) {
		width: 100%;
		justify-content: center;
	}
`

export { Styled, Container, IconsContainer, Content };
