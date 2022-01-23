import styled from "styled-components";

const IconStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        padding: .5em;
    }

	
    @media (max-width: 768px) {
		.icons-content {
			bottom: 80px;
		}
	}
`

export default IconStyles;