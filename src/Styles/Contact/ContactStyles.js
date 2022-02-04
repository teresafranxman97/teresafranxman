import styled from "styled-components";

const ContactStyles = styled.div`
    padding-top: 3vh;

`


const Container = styled.div`
    form {
        background: #A7FFF0;
        height: 50vh;
    }

    .textarea {
        margin: 1em;
        display: flex;
        flex-direction: column;

        label {
            border-bottom: 3px solid black;
            margin-bottom: .5em;
        }
    }

    .button-container {
        margin: 1em;
        display: block;
        float:

        button {
            background: black;
            border-radius: 20px;
            color: #F8F5F5;
            width: 50%;
            border: none;
            padding: 10px;
            font-weight: normal;
        }
    }
    
    @media(max-width: 480px) {
        padding: 1rem;
    }
`

const ContentContainer = styled.div`
    text-align: center;
`

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100vw;
    font-size: .5rem;
    font-weight: 100;
    color: #F8F5F5;
    background: #15161C;
`

const Label = styled.div`
    border-bottom: 3px solid black;
    margin: 1em;
    
    input[type=text] {
        border: none;
        background: transparent;
    }
`

const Icons = styled.div`
    flex-direction: row;
`

export { ContactStyles, Container, ContentContainer, Footer, Label, Icons}