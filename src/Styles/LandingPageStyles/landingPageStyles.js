import styled from "styled-components";

const Styled = styled.div`
	text-align: center;
	
	.container {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 50%;
		text-align: left;
		padding-left: 2em;
		padding-right: 2em;
	}

	.content-container {
		h1 {
			font-size: 8em;
		}

		p {
			font-size: 4em;
		}
	}
	
	.icons-content {
		background: #FFE3D1;
		position: absolute;
		padding: 3em 12em;
		right: 0;
		bottom: 40px;
	}
	a {
		text-decoration: none;
	}
`;

const Button = styled.div `
	background: black;
	padding: 10px;
	width: 20em;
	text-align: center;
	border: 1px solid black;
	border-radius: 30px;
	color: #FFF9F5;
	font-size: 25px;
	
`

export { Styled, Button };
