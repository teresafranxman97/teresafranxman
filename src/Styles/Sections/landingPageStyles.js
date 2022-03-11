import styled from "styled-components";

const Styled = styled.div`

`;

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-flow: column;
	justify-content: center;

	h1 {
		margin: 0;
		font-size: clamp(1rem, 2.5vw, 1.5rem);
		font-weight: 400;
		color: #3F3565;
	}

	p {
		font-size: clamp(1.5rem, 2.5vw, 3rem);
		font-weight: 800;
		margin: 0;
		color: #3F3565;
	}

	.arrow {
		position: absolute;
		bottom: 0;
		left: 49vw;
		color: #3F3565;
	}

	@media (min-width: 769px) {
		p {
			width: 60vw;
		}
	}
`

const IconsContainer = styled.div`
	margin-top: 1rem;
	
	a {
		color: #3F3565;
		margin-right: 1rem;
	}
`

export { Styled, Container, IconsContainer };
