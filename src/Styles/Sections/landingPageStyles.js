import styled from "styled-components";

const Styled = styled.div``;

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 30px;
	}
`;

const IconsContainer = styled.div`
	margin-top: 1rem;

	a {
		margin-right: 1rem;
	}
`;

export { Styled, Container, IconsContainer };
