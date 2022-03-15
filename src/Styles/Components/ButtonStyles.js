import styled, { css } from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

const ButtonStyles = styled(motion.div)`
	background: transparent;
	border: 1px solid ${(props) => props.theme.main};
	cursor: pointer;
	margin: 1rem 0;

	:hover {
		background: ${(props) => props.theme.main};
		transition: 0.3s;

		a {
			color: #fffdfd;
		}
	}

	a {
		color: ${(props) => (props.primary ? "#3F3565" : "#FFFDFD")};
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

	@media (min-width: 480px) {
		width: 20rem;
	}

	@media (min-width: 280px) {
		margin-bottom: 1rem;
	}
`;

ButtonStyles.defaultProps = {
	theme: {
		main: '#3F3565'
	}
}


const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1vh;

	@media (min-width: 767px) {
		flex-direction: row;
	}
`

export { ButtonStyles, ButtonContainer };