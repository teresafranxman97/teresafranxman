import styled from 'styled-components';

const Styles = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 480px) {
		padding: 10vh 0;
	}
`;

const ContentContainer = styled.div`
	display: grid;
	gap: 1rem;
	margin-top: 1rem;

	img {
		width: 100%;
		height: 100%;
	}

	p {
		margin: 0;
		font-size: clamp(0.85rem, 1vw, 1.5rem);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	@media (min-width: 480px) {
		img {
			height: 50vh;
		}
	}
`;
export { Styles, ContentContainer };
