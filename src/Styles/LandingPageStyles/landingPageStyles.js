import styled, { css } from "styled-components";

const Styled = styled.div`
	height: 100vh;
	
	a {
		text-decoration: none;
	}
	
`;

const Button = styled.div `
	background: transparent;
	width: 15rem;
	padding-top: 5px;
	padding-bottom: 5px;
	text-align: center;
	border: 1px solid #ED71AD;
	border-radius: 5px;
	cursor: pointer;

	:hover {
		background: #FBAE3C;
		transition: 0.3s;
	}

	a {
		color: #FFF9F5;
		font-size: 20px;
		
	}
	

	@media (max-width: 768px) {
		margin-bottom: 1rem;

		a {
			font-size: 18px;
		}
	}

	@media (max-width: 480px) {
		padding: 6px 3px;
		margin-bottom: 1rem;

		a {
			font-size: 15px;
		}
	}

	${props => props.primary && css`
		background: #ED71AD;
		color: #FFFFFF;
	`}
`

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row nowrap;
	justify-content: space-between;
	width: 32rem;

	@media (max-width: 768px) {
		flex-direction: column;
		width: auto;
	}

	@media (max-width: 480px) {
	}
`

const Container = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	text-align: center;
	padding-top: 3rem;

	
`

const Content = styled.div`
	h1 {
		font-size: 1.5rem;
		height: 113px;
		line-height: 300px;
		font-weight: 300;
	}

	p {
		font-size: 4rem;
		line-height: 70px;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		p {
			font-size: 2.8rem;	
		}
	}

	@media (max-width: 480px) {
		h1 {
			line-height: 250px;
			font-size: 1rem;
		}

		p {
			font-size: 1.8rem;
			line-height: 40px;
		}
	}
`

const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	bottom: 0;
	position: fixed;
	width: 100%;

	.left-icons {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

    .icon {
        padding: .5em;
        color: #FFFFFF;
    }

	
    @media (max-width: 768px) {
		
	}
`

export { Styled, Button, ButtonContainer, Container, IconsContainer, Content };
