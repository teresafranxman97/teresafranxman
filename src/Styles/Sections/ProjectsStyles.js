import styled from "styled-components";

const ProjectsStyles = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;

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
		background: #4a4a4ad9;
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

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	border-radius: 5px;
	filter: drop-shadow(4px 4px 2px #00000033);

	.img-container {
		width: 100%;
		height: 50vh;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 100%;
		height: 100%;
		background-position: center;
		background-size: cover;
		border-radius: 5px;
		filter: opacity(0.8);
	}

	p {
		font-size: 18px;
		font-weight: 600;
		text-align: center;
	}

	.show-project {
		position: absolute;
		border-radius: 5px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		background: #29b4efc7;

		h6 {
			font-size: 21px;
			font-weight: 300;
			letter-spacing: 2px;
		}

		button {
			background: #f05f7e;
			border: 1px solid #f05f7e;
			cursor: pointer;
			font-size: 16px;
			letter-spacing: 2px;
			color: white;
			font-weight: 200;
			padding: 15px 40px;
			font-family: "Poppins";
			filter: drop-shadow(4px 4px 6px #0000006b);
		}
	}

	@media screen and (max-width: 1440px) {
		.img-container {
			height: 45vh;
		}
	}

	@media screen and (max-width: 1024px) {
		.img-container {
			height: 35vh;
		}
	}
`;

export { ProjectsStyles, ContentGrid, Container };
