import styled from "styled-components";

const ProjectsStyles = styled.div`
	min-height: 100vh;
	padding-top: 10vh;

	.project-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1rem;
		margin-top: 2rem;
	}

	a {
		text-decoration: none;
		color: white;
		font-weight: 800;
	}

	img {
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}

	.info-container {
		display: flex;
		flex-direction: column;
		width: 40vw;
	}

	@media (min-width: 1023px) {
		display: flex; 
		flex-direction: column;
		justify-content: center;
		padding-top: 15vh;
	}

`;

export default ProjectsStyles;
