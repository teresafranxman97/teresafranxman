import styled from "styled-components";

const Styles = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	max-width: 2000px:
	margin: auto;

	@media screen and (max-width: 1024px) {
		flex-direction: column;
	}
`;

const ImageContainer = styled.div`
	width: 30rem;

	img {
		width: 100%;
	}

	@media screen and (max-width: 1024px) {
		width: 20rem;
	}

	@media screen and (max-width: 425px) {
		width: 100%;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	h4 {
		font-size: 14px;
		font-weight: 200;
		letter-spacing: 1px;
	}

	@media screen and (min-width: 1024px) {
		width: 54rem;
	}

	@media screen and (max-width: 1024px) {
		width: 100%;
	}


	@media screen and (max-width: 300px) {
		.content-wrapper p {
			font-size: 12px;
		}
	}
`;



export { Styles, ImageContainer, ContentContainer };
