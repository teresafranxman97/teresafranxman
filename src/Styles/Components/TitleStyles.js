import styled from "styled-components";

const TitleStyles = styled.div`
	font-size: 24px;
	font-family: Tenor Sans;
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: .5vh;

	span {
		background: #29b4ef;
		width: 250px;
		height: 0.5vh;
	}

	@media (min-width: 1024px) {
		font-size: 30px;
	}

	@media screen and (max-width: 480px) {
		font-size: 22px;
	}

	@media screen and (max-width: 300px) {
		font-size: 20px;
	}
`;

export default TitleStyles;
