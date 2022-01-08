import styled from "styled-components";

const StyledSkills = styled.div`   
    margin: 0;
    padding: 2em;

    .content {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .skills-container {
		display: flex;
		flex-direction: column;
		align-items: center;
        text-align: center;
        margin: .75em;
        width: 30%;
	}

	h1 {
		margin: 0 auto;
		padding: 0 auto;
	}

    .icon {
        background: rgb(204,213,255);
        background: linear-gradient(63deg, rgba(204,213,255,1) 20%, rgba(230,206,255,1) 65%, rgba(255,204,247,1) 100%);
        color: black;
        border-radius: 5px 10px;
    }

	@media (max-width: 320px) {
		
		.skills-container {
            font-size: 18px;
            font-weight: normal;
	}
`;

export default StyledSkills;
