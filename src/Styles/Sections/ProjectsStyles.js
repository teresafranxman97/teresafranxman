import styled from "styled-components";

const ProjectsStyles = styled.div`
	height: 100vh;

	.project-container {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
	}

	.project-content {
        margin: 1em;
		display: flex;

		a {
			text-decoration: none;
			color: white;
			font-weight: 800;
		}
	}

	img {
		width: 30rem;
		border-radius: 8px;
	}

	.info-container {
		display: flex;
		flex-direction: column;
		width: 40vw;
	}
`;

export default ProjectsStyles;
