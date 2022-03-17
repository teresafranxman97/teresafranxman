import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 100vh;
    padding: 10vh 0;

    h1 {
        margin: 5px 0;
    }  
    
    p {
        margin: 0;
        margin-right: 3vw;
        font-size: clamp(.85rem, 1.25vw, 1rem);
    }

    .header p {
        color: #3F3565;
        font-size: clamp(.8rem,1vw,2rem);
    }

    @media (min-width: 1023px) {
        .header {
            width: 50vw;
        }
    }
`

const Content = styled.div `
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    justify-content: left;
    border: 3px solid #3F3565;
    background: #3F3565;
    padding: 1rem;
    color: #FFFDFD;
    
    p {
        font-size: 12px;
        font-weight: 400;
    }

    h3 {
        margin: .75em 0;
        font-size: 14px;
    }

    .icon {
        width: 3.25rem;
        height: 3.25rem;
    }
`

const ContentContainer = styled.div`
    display: grid;
    gap: 1rem;
    margin-top: 1rem;

    @media (min-width: 767px) {
        margin-top: 0;
        grid-template-columns: repeat(2, 1fr);
    }
`

export { Container, Content, ContentContainer };
