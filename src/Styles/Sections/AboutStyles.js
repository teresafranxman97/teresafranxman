import styled from 'styled-components';

const Styles = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 768px) {
		padding: 10vh 0;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
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
		flex-direction: row;
		
		img {
			height: 350px;
			width: 350px;
		}
	}
`;
export { Styles, ContentContainer };
