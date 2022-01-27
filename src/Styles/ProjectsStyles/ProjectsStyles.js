import styled from "styled-components";

const ProjectsStyles = styled.div`
	padding: 2em;
	color: #15161C;

	.outer-box {
		padding: 12em 14em;
		left: 0;
		background: #D1FFE3;
		position: fixed;
	}

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
			color: #15161C;
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
