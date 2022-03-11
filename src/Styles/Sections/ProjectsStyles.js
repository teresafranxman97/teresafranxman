import styled from "styled-components";

const ProjectsStyles = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10vh 0;

	.project-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 4rem;
		margin-top: 3vh;
	}

	a {
		text-decoration: none;
		color: white;
		font-weight: 800;
	}

	img {
		width: 100%;
		background-color: rgb(247 247 247);
	}

	p {
		margin: 0;
		font-size: 18px;
		font-weight: bold;
		color: #3F3565;
	}

	.info-container {
		display: flex;
		flex-direction: column;
		width: 40vw;
	}

	@media (min-width: 1023px) {
		display: flex; 
		flex-direction: column;

		img {
			height: 55vh;
		}
	}

	@media (min-width: 768px) {
		.project-container {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}

	@media (max-width: 1023px) {
		padding: 10vh 0;
	}
`;

export default ProjectsStyles;
