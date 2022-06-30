import styled from "styled-components";

const NavStyles = styled.div`
	background: ${({ isOpen }) => (isOpen ? "#17ADEE" : "")};
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	a {
		color: ${({ isOpen }) => (isOpen ? "white" : "#F9FDF7")};
		text-decoration: none;
		font-size: 15px;
		font-weight: 200;
		letter-spacing: 1px;
	}

	@media (min-width: 2000px) {
		left: "";
		right: "";
		width: 2000px;
		margin: auto;
	}

	@media (max-width: 2000px) {
		left: ${({ isOpen }) => (isOpen ? "0" : "10rem")};
		right: ${({ isOpen }) => (isOpen ? "0" : "10rem")};
	}

	@media (max-width: 1440px) {
		left: ${({ isOpen }) => (isOpen ? "0" : "4rem")};
		right: ${({ isOpen }) => (isOpen ? "0" : "4rem")};
	}

	@media (max-width: 769px) {
		left: ${({ isOpen }) => (isOpen ? "0" : "1rem")};
		right: ${({ isOpen }) => (isOpen ? "0" : "1rem")};
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
	position: relative;
	align-items: ${({ isOpen }) => (isOpen ? "" : "baseline")};

	.contact {
		border: ${({ isOpen }) => (isOpen ? "" : "1px solid #29b4ef")};
		border-radius: 2px;
		background: #29b4ef;
		padding: 0 10px;
		justify-content: ${({ isOpen }) => (isOpen ? "center" : "")};
		display: flex;
		align-items: center;
		height: 40px;
	}

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
