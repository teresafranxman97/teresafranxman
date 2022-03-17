import styled from "styled-components";

const StyledTools = styled.div`
	color: #3f3565;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.content-grid {
		display: grid;
		gap: 1rem;
		margin-top: 5vh;
		color: #3f3565;
	}

	.skills-container {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		text-align: center;
		justify-content: center;
		background: #3f3565;
		color: #fffdfd;
	}

	.icon {
		border-radius: 5px 10px;
		padding: 0.5em;
	}

	h3 {
		font-size: 0.85rem;
		font-weight: 300;
	}

	.title-container p {
		margin: 0;
		margin-right: 3vw;
		font-size: clamp(0.8rem, 1vw, 2rem);
	}

	@media (min-width: 768px) {
		.content-grid {
			grid-template-columns: repeat(5, 1fr);
		}

		.title-container p {
			width: 50vw;
		}
	}

	@media (max-width: 767px) {
		h1 {
			width: auto;
			font-weight: normal;
		}

		.content-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 480px) {
		padding: 10vh 0;

		.content-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 320px) {
		.content-grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

export default StyledTools;
