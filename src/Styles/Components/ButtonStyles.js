import styled from "styled-components";

const ButtonStyles = styled.div`
	background: ${(props) => props.theme.main};
	cursor: pointer;
	margin: 1rem 0;
	border-radius: 5px px;
	filter: drop-shadow(4px 5px #00000026);

	:hover {
		background: #17adee;
		transition: 0.3s;
	}

	a {
		color: white;
		font-size: 16px;
		letter-spacing: 1px;
		text-align: center;
		display: block;
		padding: 10px;
		font-weight: 200;
		text-decoration: none;
	}

	@media (min-width: 767px) {
		margin-right: 1rem;
	}

	@media (min-width: 480px) {
		width: 15rem;
	}

	@media (min-width: 280px) {
		margin-bottom: 1rem;
	}
`;

ButtonStyles.defaultProps = {
	theme: {
		main: "#29B4EF"
	},
};

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1vh;

	@media (min-width: 767px) {
		flex-direction: row;
	}
`;

export { ButtonStyles, ButtonContainer };
