import styled from "styled-components";

const NavStyles = styled.div`
	background: ${({ isOpen }) => (isOpen ? "#3F3565" : "")};
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	position: fixed;
	top: 0;
	left: ${({ isOpen }) => (isOpen ? "0" : "1rem")};
	right: ${({ isOpen }) => (isOpen ? "0" : "1rem")};

	a {
		color: ${({ isOpen }) => (isOpen ? "white" : "#F9FDF7")};
		text-decoration: none;
		font-size: 15px;
	}

	@media (min-width: 769px) {
		left: ${({ isOpen }) => (isOpen ? "0" : "4vw")};
		right: ${({ isOpen }) => (isOpen ? "0" : "4vw")};
	}
`;

const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;

	@media (max-width: 768px) {
		display: flex;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: right;
	position: relative;

	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
		transition: ${({ isOpen }) =>
			isOpen ? "max-height 0.3s ease-in" : "0s ease-out"};
		min-width: 100vw;
	}
`;

const MenuLink = styled.div`
	padding: 1rem;
	cursor: pointer;
	text-align: center;
	font-weight: 400;
	transition: all 0.3s ease-in;

	&:hover {
		color: #ff781f;
	}
`;
const Logo = styled.div`
	img {
		margin-left: ${({ isOpen }) => (isOpen ? "1rem" : "")};
		margin-top: 1rem;
	}
`;

export { NavStyles, Hamburger, Menu, MenuLink, Logo };
