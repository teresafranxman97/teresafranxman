import styled from "styled-components";

const ProjectsStyles = styled.div`
	height: 100vh;
	padding-top: 13vh;

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
		height: 350px;
		border-radius: 5px;
	}

	.info-container {
		display: flex;
		flex-direction: column;
		width: 40vw;
	}


	@media (min-width: 769px) {
		.project-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	
`;

export default ProjectsStyles;
