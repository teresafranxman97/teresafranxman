import styled from "styled-components";

const Styled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;

	.container {
		text-align: center;
		margin-top: 4vh;
	}

	.icons-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		bottom: 0;
		position: fixed;
		width: 100%;
	}
	
	h1 {
		font-size: 2rem;
		height: 113px;
		line-height: 300px;
		font-weight: normal;
	}

	p {
		font-size: 5rem;
		line-height: 70px;
	}
	
	a {
		text-decoration: none;
	}

	


	@media (max-width: 768px) {
		.container {
			width: 100vw;
		}

		p {
			font-size: 3.2rem;	
		}
	}

	@media (max-width: 480px) {
		.container {
			width: 100vw;
			margin-top: 7vh;
		}

		h1 {
			font-size: 1rem;
			line-height: 250px;
		}

		p{
			font-size: 2.5rem;
			line-height: 40px;
		}
	}
	

	
`;

const Button = styled.div `
	background: black;
	padding: 9px 3px;
	text-align: center;
	margin-left: 6rem;
	margin-right: 6rem;
	border: 1px solid black;
	border-radius: 30px;
	
	a {
		color: #FFF9F5;
		font-size: 25px;
	}

	@media (max-width: 480px) {
		margin-left: 4rem;
		margin-right: 4rem;
	}
`

export { Styled, Button };
