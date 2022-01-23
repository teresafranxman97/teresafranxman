import styled from "styled-components";

const Styled = styled.div`
	display: flex;

	.container {
		display: flex;
		flex-direction: column;
		justify-content: right;
		text-align: left;
		width: 60vw;
		padding-left: 2em;
	}
	
	h1 {
		font-size: 8em;
		height: 113px;
		line-height: 100px;
	}

	p {
		font-size: 4em;
	}
	
	a {
		text-decoration: none;
	}



	@media (max-width: 768px) {
		.container {
			width: 87vw;
		}

	}

	.icons-content {
		background: #FFE3D1;
		margin-top: 2em;
		width: 50vw;
		position: inherit;
		top: 0;
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
