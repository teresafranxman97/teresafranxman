import styled, { css } from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const ButtonStyles = styled(motion.div) `
	background: ${props => props.primary ? "transparent" : "#15161C"};
	border: 1px solid ${props => props.theme.main};
	border-radius: 5px;
	cursor: pointer;

	:hover {
		background: ${props => props.theme.main};
		transition: 0.3s;
	}

	a {
		color: ${props => props.primary ? '#15161C' : "white" } ;
		font-size: 15px;
		text-align: center;
		display: block;
		padding: 8px;	
		font-weight: 400;
		text-decoration: none;
	}

	@media (min-width: 767px) {
		margin-right: 1rem;
	}

	@media (min-width:  480px) {
		width: 20rem;
	}

	@media (min-width: 280px) {
		margin-bottom: 1rem;
	}
`

ButtonStyles.defaultProps = {
	theme: {
		main: "black"
	}
}


const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 767px) {
		flex-direction: row;
	}
`

export { ButtonStyles, ButtonContainer };