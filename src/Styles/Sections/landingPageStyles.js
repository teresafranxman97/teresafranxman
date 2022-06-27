import styled from "styled-components";

const Styled = styled.div`
	height: 100vh;
`;

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-flow: column;
	justify-content: center;

	.content {
		p {
			font-size: 64px;
			font-weight: bold;
		}
	}

	@media screen and (max-width: 600px) {
		.content {
			p {
				font-size: 55px;
			}
		}
	}

	@media screen and (max-width: 480px) {
		.content {
			p {
				font-size: 40px;
			}
		}
	}
`;

const IconsContainer = styled.div`
	margin-top: 4rem;

	a {
		margin-right: 1rem;
	}
`;

export { Styled, Container, IconsContainer };
