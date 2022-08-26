import styled from "styled-components";

const Styled = styled.main`
	height: 100vh;
`;

const Container = styled.section`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	.content-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
		align-items: center;

		p {
			font-size: 18px;
			color: #909090;
		}
	}

	h1 {
		font-size: 64px;
		margin: 0;
		color: #303336;
	}

	.buttons {
		display: flex;
		gap: 3rem;
	}

	.image-container {
		position: absolute;
		right: 0;
		bottom: 1rem;
	}

	img {
		width: 100%;
		height: 450px;
	}

	@media (min-width: 2000px) {
		margin: auto;
		max-width: 2000px;
	}

	@media (max-width: 2000px) {
		padding: 0 10rem;
	}

	@media (max-width: 1440px) {
		padding: 0 4rem;
	}

	@media (max-width: 769px) {
		padding: 0 1rem;
	}
`;

const IconsContainerOuter = styled.div`
	display: flex;
	gap: 1rem;
	position: absolute;
	flex-direction: column;
	left: 10rem;
	justify-content: center;
	align-items: center;
	bottom: 1rem;

	h6 {
		font-size: 18px;
		color: #909090;
		font-weight: 500;
	}

	.icons {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
`;

export { Styled, Container, IconsContainerOuter };
