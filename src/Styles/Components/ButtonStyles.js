import styled, { css } from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const ButtonStyles = styled(motion.div) `
	background: ${props => props.primary ? "#D6ABBE" : "transparent"};
	width: 100%;
	border: 1px solid ${props => props.theme.main};
	border-radius: 5px;
	cursor: pointer;
	margin-right: 1rem;

	:hover {
		background: ${props => props.theme.main};
		transition: 0.3s;
	}

	a {
		color: ${props => props.primary ? '#FFFFFF' : '#15161C' } ;
		font-size: 18px;
		text-align: center;
		display: block;
		margin: 8px;	
		font-weight: 300;
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
		main: "#D6ABBE"
	}
}


const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`

export { ButtonStyles, ButtonContainer };