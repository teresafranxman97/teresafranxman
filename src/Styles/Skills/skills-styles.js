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
        background: rgb(204,213,255);
        background: linear-gradient(63deg, rgba(204,213,255,1) 20%, rgba(230,206,255,1) 65%, rgba(255,204,247,1) 100%);
        color: #080e29;
        border-radius: 5px 10px;
        padding: .5em;
        opacity: 90%;
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
