import styled from "styled-components";

const TitleStyles = styled.div`
	font-size: 24px;
	text-decoration: underline #29b4ef;
	font-family: Tenor Sans;
	text-decoration-thickness: 4px;
	margin: 1rem 0;

	@media screen and (max-width: 480px) {
		font-size: 22px;
	}

	@media screen and (max-width: 300px) {
		font-size: 20px;
	}
`;

export default TitleStyles;
