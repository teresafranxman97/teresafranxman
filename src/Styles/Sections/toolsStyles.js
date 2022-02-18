import styled from "styled-components";

const StyledTools = styled.div`   
    padding: 7rem;

    .content-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(5, 1fr);
    }
    
    .skills-container {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
        text-align: center;
        justify-content: center;
        background: #F0EFF0;
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

    @media (max-width: 780px) {
        padding: 3rem;

        .content-grid {
            grid-template-columns: repeat(3, 1fr);
        }

        h1 {
            width: auto;
            font-weight: normal;
        }
    }

    @media (max-width: 480px) {
        padding: 2rem;
    }

	
`;

export default StyledTools;
