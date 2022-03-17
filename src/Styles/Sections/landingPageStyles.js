import styled from "styled-components";

const Styled = styled.div``;

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-flow: column;
	justify-content: center;

	h1 {
		margin: 0;
		font-size: clamp(1rem, 2.5vw, 1.5rem);
		font-weight: 400;
		color: #3f3565;
	}

	p {
		font-size: clamp(1.25rem, 2.5vw, 3rem);
		font-weight: 800;
		margin: 0;
		color: #3f3565;
	}

	.arrow {
		position: absolute;
		bottom: 1rem;
		left: 49vw;
		color: #3f3565;
	}

	@media (min-width: 769px) {
		p {
			width: 60vw;
		}
	}
`;

const IconsContainer = styled.div`
	margin-top: 1rem;

	a {
		color: #3f3565;
		margin-right: 1rem;
	}
`;

export { Styled, Container, IconsContainer };
