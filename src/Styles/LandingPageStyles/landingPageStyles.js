import styled, { css } from "styled-components";
import { motion } from 'framer-motion/dist/framer-motion';

const Styled = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	align-items: center;
	padding-left: 2rem;
    padding-right: 2rem;
	justify-content: center;

	a {
		text-decoration: none;
	}

	@media (min-width: 1024px) {
		flex-direction: row-reverse;
		padding-left: 5rem;
	}
`;


const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media (min-width: 1024px) {
		width: 50vw;
	}
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
const Button = styled(motion.div) `
	background: transparent;
	width: 100%;
	border: 1px solid #B2FF00;
	border-radius: 5px;
	cursor: pointer;
	margin-right: 1rem;

	:hover {
		background: #B2FF00;
		transition: 0.3s;
		
		a {
			color: #15161C;
		}
	}

	a {
		color: #FFF9F5;
		font-size: 18px;
		text-align: center;
		display: block;
		margin: 8px;	
	}

	@media (min-width:  480px) {
		width: 20rem;
	}

	@media (min-width: 280px) {
		margin-bottom: 1rem;
	}

	${props => props.primary && css`
		background: #FF00B2;
		border: none;
	`}
`

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`

const MidContent = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;
	height: 35vh;

	.circle {
		background: #B2FF00;
		width: 12rem;
		height: 12rem;
		padding: .5rem;
		position: relative;
		border-radius: 100%;
	}
	
	img {
		position: absolute;
		height: 35%;
	}
	
	@media (min-width: 1024px) {
		width: 50vw;
		
		.circle {
			bottom: 5rem;
		}

		img {
			height: 45%;
		}
	}

	@media (min-width: 480px) {
		.circle {
			padding: 5vw;
		}
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

export { Styled, Button, ButtonContainer, Container,MidContent, IconsContainer, Content };
