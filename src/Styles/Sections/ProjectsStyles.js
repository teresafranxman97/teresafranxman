import styled from "styled-components";

const ProjectsStyles = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10vh 0;

	@media (max-width: 1023px) {
		padding: 10vh 0;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 0 1rem;

	h1 {
		font-size: clamp(1rem, 2vw, 2rem);
	}

	p {
		font-size: clamp(0.85rem, 1vw, 1rem);
	}

	@media (min-width: 768px) {
		width: 50vw;
		padding: 0 3rem;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #3f3565;
	color: #fffdfd;
	margin: 1rem 0;
	padding: 1rem;

	img {
		width: 300px;
	}

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export { ProjectsStyles, Content, Container };
