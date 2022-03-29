import styled from "styled-components";

const Styled = styled.div``;

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 30px;
		font-family: prata;
	}

	p {
		font-size: 14px;
	}

	.img-container {
		height: 54%;
	}

	img {
		width: 100%;
		height: 70vh;
	}

	.content {
		height: 50vh;
	}

	@media (min-width: 1023px) {
		flex-flow: row-reverse;

		.img-container {
			width: 60vw;
			height: 100vh;
		}

		img {
			height: 100%;
		}

		.content {
			width: 50vw;
		}
	}
`;

const IconsContainer = styled.div`
	margin-top: 1rem;

	a {
		margin-right: 1rem;
	}
`;

export { Styled, Container, IconsContainer };
