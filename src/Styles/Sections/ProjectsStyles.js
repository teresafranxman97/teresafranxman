import styled from "styled-components";

const ProjectsStyles = styled.div`
	padding: 2em;

	.project-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		position: relative;
	}

	.project-content {
        margin: 1em;
        width: 40%;

		a {
			text-decoration: none;
			color: white;
			font-weight: 800;
		}
	}

	img {
		width: 100%;
		border-radius: 8px;
	}

	@media (max-width: 768px) {

		.project-content {
			width: 100%;
		}
	}
`;

export default ProjectsStyles;
