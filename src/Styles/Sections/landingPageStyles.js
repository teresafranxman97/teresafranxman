import styled from "styled-components";

const Styled = styled.div`

`;

const Container = styled.div`
	height: 40vh;
	display: flex;
	flex-flow: column;
	justify-content: end;

	h1 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 500;
	}

	p {
		font-size: clamp(1rem, 2vw, 1.25rem);
		font-weight: 300;
	}

	img {
		width: 100%;
		border-radius: 5px;
	}

	
	@media (min-width: 1023px) {
		justify-content: end;
		
		img {
			width: 50vw;
		}
	}

	@media (min-width: 769px) {
		height: 50vh;

		p {
			width: 50vw;
		}
	}
`

const IconsContainer = styled.div`
	a {
		color: #15161C;
		margin-right: 1rem;
	}
`

export { Styled, Container, IconsContainer };
