import styled from "styled-components";

const IconStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon {
        padding: .5em;
        color: #15161C;
    }

	
    @media (max-width: 768px) {
		.icons-content {
			bottom: 80px;
		}
	}
`

export default IconStyles;