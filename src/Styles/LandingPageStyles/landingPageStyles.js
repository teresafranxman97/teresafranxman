import styled from "styled-components";

const Styled = styled.div`
	

	.container {
		display: flex;
		flex-direction: column;
		width: 70vw;
		align-items: left;
		
	}
	
	h1 {
		font-size: 8em;
		height: 220px;
	}

	p {
		font-size: 4em;
	}
	
	a {
		text-decoration: none;
	}
	
	.box-under {
		background-color: #FFCEAD;
		padding: 1em 5em;	
	}

	.icons-content {
		background: #FFE3D1;
		padding: 3em 14em;

	}

	@media (max-width: 768px) {
		.container {
			width: 87vw;
		}

		.content-container {
			p {
				font-size: 7vw;
	
			}

			h1 {
				font-size: 6em;
			}
		}
		

		.icons-content {
			bottom: 80px;
		}
	}

	@media (max-width: 480px) {
		.content-container, h1 {
			font-size: 12px;
		}

		
	}
`;

const Button = styled.div `
	background: black;
	padding: 8px 5px;
	text-align: center;
	width: 50%;
	border: 1px solid black;
	border-radius: 30px;
	
	a {
		color: #FFF9F5;
		font-size: 30px;
	}
`

export { Styled, Button };
