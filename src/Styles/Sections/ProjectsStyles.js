import styled from "styled-components";

const ProjectsStyles = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10vh 0;

	.modal img {
		width: 40vw;
		height: auto;
		display: block;
	}
`;

const ContentGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Container = styled.div`
	background: #3f3565;
	color: #fffdfd;
	padding: 1rem;

	img {
		width: 100%;
	}

	@media (min-width: 768px) {
		img {
			width: 300px;
		}
	}
`;

export { ProjectsStyles, ContentGrid, Container };
