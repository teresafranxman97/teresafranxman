import styled from "styled-components";

const Styles = styled.main`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ImageContainer = styled.section`
	width: 30rem;

	div {
		position: relative;
		padding: 5px 15px;
	}

	img {
		width: 100%;
		height: 100%;
	}

	div.top:before {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 150px;
		border-top: 3px solid #29b4ef;
	}
	div.bottom:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 150px;
		border-bottom: 3px solid #f05f7e;
	}

	div.left:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 150px;
		border-left: 3px solid #29b4ef;
	}

	div.right:before {
		content: "";
		position: absolute;
		right: 0;
		bottom: 20px;
		height: 150px;
		border-right: 3px solid #f05f7e;
	}

	@media screen and (max-width: 1024px) {
		width: 40rem;
	}

	@media screen and (max-width: 800px) {
		width: 20rem;
	}

	@media screen and (max-width: 425px) {
		width: 100%;
	}
`;

const ContentContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.content-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.content-wrapper p {
		font-size: 14px;
		margin: 0;
		letter-spacing: 1px;
		font-weight: 200;
	}

	@media screen and (min-width: 1024px) {
		.content-wrapper p {
			font-size: 16px;
		}
	}

	@media screen and (min-width: 801px) {
		width: 54rem;
		justify-content: space-evenly;
	}

	@media screen and (max-width: 800px) {
		width: 100%;
	}

	@media screen and (max-width: 300px) {
		.content-wrapper p {
			font-size: 12px;
		}
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2rem;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
`;

export { Styles, ImageContainer, ContentContainer, Wrapper };
