import styled from "styled-components";

const ProjectsStyles = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10vh 0;

	.modal {
		:hover {
			cursor: pointer;
		}
	}

	.modal img {
		width: 40vw;
		height: auto;
		display: block;
	}

	.modal,
	open {
		position: fixed;
		background: #8b8b8b;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
	}
`;

const ContentGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1rem;
	margin-top: 2rem;

	:hover {
		cursor: pointer;
	}

	@media (min-width: 480px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: white;

	.img-container {
		width: 100%;
		text-align: center;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 180px;
	}

	p {
		font-size: 18px;
		font-weight: 600;
		text-align: center;
	}
`;

export { ProjectsStyles, ContentGrid, Container };
