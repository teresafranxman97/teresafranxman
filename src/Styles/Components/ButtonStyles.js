import styled, { css } from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

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

export { Button, ButtonContainer };