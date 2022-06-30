import styled from "styled-components";

const AppStyles = styled.div`
	min-height: 100vh;

	@media (min-width: 2000px) {
		margin: auto;
		max-width: 2000px;
	}

	@media (max-width: 2000px) {
		padding: 0 10rem;
	}

	@media (max-width: 1440px) {
		padding: 0 4rem;
	}

	@media (max-width: 769px) {
		padding: 0 1rem;
	}
`;

export default AppStyles;
