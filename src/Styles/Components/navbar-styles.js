import styled from "styled-components";

const NavStyles = styled.div`
	background: ${({ isOpen }) => (isOpen ? "#FF00B2" : "#00122026")};
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	position: fixed;
	top: 0;
	left: 0;
    right: 0;
	
	a {
		color: #FFFFFF;
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
		background: #B2FF00;	
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

	.primary-menulink {
		background: #D6ABBE;
	}
`

const MenuLink = styled.div `
	padding: 1rem;
	cursor: pointer;
	text-align: center;
	font-weight: 400;
	transition: all 0.3s ease-in;
	
	&:hover {
		color: #FF781F;
	}

`
const Logo = styled.div `
	padding: 1rem 0;
	font-weight: 800;
	font-size: 2rem;
	
	a {
		color: #B2FF00;	
	}
`



export { NavStyles, Hamburger, Menu, MenuLink, Logo};
