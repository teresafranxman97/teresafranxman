import styled, { css } from "styled-components";
import { motion } from 'framer-motion/dist/framer-motion';

const Styled = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding-top: 15rem;

	a {
		text-decoration: none;
	}

	@media (max-width: 1024px) {
		grid-template-columns: repeat(1, 1fr);
		padding-top: 8rem;
	}
`;


const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	padding-right: 2rem;

	@media (max-width: 1024px) {
		padding: 2rem;
	}
`

const Content = styled.div`
	h1 {
		font-size: 1rem;
		font-weight: 300;
		height: 1px;
	}

	p {
		font-size: 3rem;	
		font-weight: 600;
		line-height: 60px;
	}

	@media (max-width: 1024px) {
		text-align: center;

		p {
			font-size: 2rem;
			line-height: 35px;
		}
	}

	@media (max-width: 480px) {
		p {
			font-size: 1.5rem;
		}
	}
`
const Button = styled(motion.div) `
	background: transparent;
	width: 15rem;
	height: 3rem;
	border: 1px solid #B2FF00;
	border-radius: 5px;
	cursor: pointer;

	:hover {
		background: #B2FF00;
		transition: 0.3s;
		
		a {
			color: #15161C;
		}
	}

	a {
		color: #FFF9F5;
		font-size: 20px;
		text-align: center;
		display: block;
		margin-top: .5rem;	
	}

	@media (max-width: 768px) {
		margin-bottom: 1rem;

		a {
			font-size: 18px;
		}
	}

	@media (max-width: 480px) {
		a {
			font-size: 15px;
		}
	}

	${props => props.primary && css`
		background: #FF00B2;
		border: none;
	`}
`

const ButtonContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: .5rem;
	justify-self: start;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(1, 1fr);
		justify-self: center;
	}
`

const MidContent = styled.div`
	display: flex;
	justify-content: center;

	.circle {
		background: #B2FF00;
		width: 20rem;
		height: 20rem;
		bottom: 56px;	
		position: relative;
		border-radius: 100%;
	}
	
	img {
		position: absolute;
	}
	
	@media (max-width: 1024px) {
		justify-content: center;
		height: 32vh;

		.circle {
			width: 15rem;
			height: 15rem;
			bottom: 20px;
		}

		img {
			height: 300px;
		}
	}
`

const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 2rem;

    .icon {
        padding: .5em;
        color:  #FF00B2;
    }

    @media (max-width: 1024px) {
		justify-content: center;
		width: 100%;
	}
`

export { Styled, Button, ButtonContainer, Container,MidContent, IconsContainer, Content };
