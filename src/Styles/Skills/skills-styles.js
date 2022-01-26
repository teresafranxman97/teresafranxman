import styled from "styled-components";

const StyledSkills = styled.div`   
    .content {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }
    
    .skills-container {
		display: flex;
		flex-flow: column wrap;
		align-items: center;
        text-align: center;
        width: 25%;
        margin: .4em;
	}

	h1 {
		margin: 0;
		padding: 0;
	}

    .icon {
        color: black;
        border-radius: 5px 10px;
        padding: .5em;
    }

	@media (max-width: 380px) {
		
		.skills-container {
            font-size: 18px;
            font-weight: normal;
            width: 30%;
        }

        h3 {
            font-size: 18px;
        }

        .icon {
            padding: .2em;
        }
	}
`;

export default StyledSkills;
