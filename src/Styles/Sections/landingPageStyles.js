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
		font-size: 32px;
		font-weight: 500;
	}

	p {
		font-size: 15px;
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

		p {
			width: 60vw;
		}
	}

	@media (min-width: 769px) {
		height: 50vh;

		h1 {
			font-size: 55px;
		}

		p {
			font-size: 24px;
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
