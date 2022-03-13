import styled from "styled-components";

const ContactStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10vh 0;
    min-height: 100vh;  

    .title-container p {
        font-size: clamp(1rem, 1vw, 2rem);
        color: #3F3565;
    }

    @media (min-width: 768px) {
        .title-container {
            width: 40rem;
        }
    }
`

const FormContainer = styled.div`
    form {
        background: transparent;
    }

    .textarea {
        display: flex;
        flex-direction: column;
        border: 2px solid #FFFFFF;
    }

    textarea {
        background: transparent;
        border: 3px solid #DFDFDF;
        height: 20vh;

        ::placeholder {
            color: #928AB2;
        }
    }

    button {
        background: transparent;
        border: 1px solid #3F3565;
        cursor: pointer;
        color: #3F3565;
        font-size: 15px;
        text-align: center;
        padding: 8px;
        width: 100%;
    }

    .button-container {
        margin-top: 1vh;
    }

    @media (min-width: 1023px) {
        width: 50vw;
        margin-right: 4rem;
    }

    @media(min-width: 480px) {
        button {
            width: 20rem;
        }
    }
`
const TextContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: .5rem;
    }
`

const Footer = styled.div`
    position: inherit;
    bottom: 0;
    text-align: center;
    width: 100vw;
    font-size: .5rem;
    font-weight: 100;
    background: transparent;
`

const Label = styled.div`
    border: 3px solid #DFDFDF;
    margin-bottom: 1rem;
    height: 4vh;
    
    input[type=text] {
        border: none;
        background: transparent;
        color: #928AB2;
        
        ::placeholder {
            color: #928AB2;
        }
    }

`

const Icons = styled.div`
    flex-direction: row;
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    .icon {
        color: #3F3565;
    }

    p {
        font-size: clamp(1rem, 1.25vw,1.5rem);
        margin-left: 1rem;
        color: #3F3565;
    }
`

const Container = styled.div`
    @media (min-width: 1023px) {
        display: flex;
        justify-content: space-between;
    }
`

export { ContactStyles, Container, FormContainer, Footer, Label, Icons, IconContainer, TextContainer };
