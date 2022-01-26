import styled from "styled-components";

const NavStyles = styled.div`
	background: ${({ isOpen }) => (isOpen ? "#FFE3D1" : "#F8F5F5")};
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	
	
	a {
		color: black;
		margin-left: 1vw;
		text-decoration: none;
	}
`;

const Hamburger = styled.div `
	display: none;
	flex-direction: column;
	cursor: pointer;

	span {
		height: 2px;
		width: 25px;
		background: black;
		margin-bottom: 4px;
		border-radius: 5px;
	}

	@media (max-width: 768px) {
		display: flex;
	}
`

const Menu = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: right;
	position: relative;

	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
		transition: max-height 0.3s ease-in;
		min-width: 100vw;
		
	}

`

const MenuLink = styled.div `
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	transition: all 0.3s ease-in;
	
	&:hover {
		color: #FF781F;
	}

`
const Logo = styled.div `
	padding: 1rem 0;
	font-weight: 800;
	font-size: 2rem;
`



export { NavStyles, Hamburger, Menu, MenuLink, Logo};
