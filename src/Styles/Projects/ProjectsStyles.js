import styled from "styled-components";

const ProjectsStyles = styled.div`

	.project-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.project-content {
        margin: 1em;
        width: 40%;
		border: 1px solid pink;
	}

	img {
		width: 100%;
	}

	@media (max-width: 768px) {
		.project-content {
			width: 100%;
		}
	}
`;

export default ProjectsStyles;
