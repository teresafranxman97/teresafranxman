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
		/* padding: 1rem; */
		top: 0;
		bottom: 0;
		right: 0;
		/* width: 100vw; */
		left: 0;
	}

	.modal-content {
		background: aliceblue;
		/* width: 71vw; */
		height: 50vh;
		position: absolute;
		top: 20vh;
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
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	img {
		width: 200px;
	}
`;

export { ProjectsStyles, ContentGrid, Container };
