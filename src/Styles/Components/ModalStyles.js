import styled from "styled-components";

const ModalStyles = styled.div``;

const ModalContent = styled.div`
	background: #514ba3;
	border-radius: 10px;
	color: #fafbf5;
	position: absolute;
	top: 31%;
	margin: 0 2rem;
	padding: 1rem;
	filter: drop-shadow(4px 4px 6px #00000061);

	p {
		color: #fafbf5;
		font-size: 14px;
	}

	@media (min-width: 768px) {
		left: 18%;
		width: 60%;
	}
`;

export { ModalStyles, ModalContent };
