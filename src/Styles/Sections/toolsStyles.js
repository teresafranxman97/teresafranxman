import styled from "styled-components";

const StyledTools = styled.div` 
    color: #3F3565;
    height: 100vh;

    .content-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 5vh;
    }
    
    .skills-container {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
        text-align: center;
        justify-content: center;
	}

	h1 {
        width: 50vw;
        font-weight: 300;
	}

    .icon {
        color: black;
        border-radius: 5px 10px;
        padding: .5em;
    }

    h3 {
        font-size: .85rem;
    }

    .title-container p {
        margin: 0;
        margin-right: 3vw;
        font-weight: 300;
        font-size: clamp(.85rem, 1.25vw, 1.75rem);
    }

    @media (min-width: 1023px) {
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
    }
`;

export default StyledTools;
