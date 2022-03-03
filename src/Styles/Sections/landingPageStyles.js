import styled from "styled-components";

const Styled = styled.div`

`;

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-flow: column-reverse;
	justify-content: start;
	padding-top: 10vh;

	h1 {
		margin: 0;
		font-size: 60px;
		line-height: 60px;
	}

	p {
		font-size: 18px;
		font-weight: 300;
	}

	img {
		width: 100%;
		border-radius: 5px;
	}

	
	@media (min-width: 1023px) {
		flex-flow: row;
		align-items: center;
		height: 80vh;
		justify-content: center;
		
		.content-container {
			width: 50vw;
		}
		
		img {
			width: 40vw;
		}

		.left-container {
			padding-right: 1rem;
		}

		.right-container {
			display: flex;
			justify-content: end;
		}
	}
`

const Content = styled.div`

`

const IconsContainer = styled.div`
	a {
		color: #15161C;
		margin-right: 1rem;
	}
`

export { Styled, Container, IconsContainer, Content };
