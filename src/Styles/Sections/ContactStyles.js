import styled from "styled-components";

const ContactStyles = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Container = styled.div`
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
        color: white;

        ::placeholder {
            color: #FFFFFF;
        }
    }

    @media (min-width: 768px) {
        width: 50vw;
    }
`
const TextContainer = styled.div`
    display: flex;
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
    border: 3px solid #FFFFFF;
    margin-bottom: 1rem;
    
    input[type=text] {
        border: none;
        background: transparent;
        color: #FFFFFF;
        
        ::placeholder {
            color: #FFFFFF;
        }
    }

`

const Icons = styled.div`
    flex-direction: row;
    padding: 1rem;

    @media (min-width: 768px) {
        width: 50vw;
    }
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    p {
        margin-left: 1rem;
    }
`

const ButtonContainer = styled.div`
    margin-top: 1rem;

    button {
        background: transparent;
        color: #FFFFFF;
        width: 15rem;
        padding-top: 3px;
        padding-bottom: 3px;
        text-align: center;
        border: 3px solid #FFFFFF;
        border-radius: 5px;
        cursor: pointer;

        :hover {
            background: #1F306E;
            transition: 0.3s;
            border: 3px solid #1F306E;
        }
    }
    
`

export { ContactStyles, Container, Footer, Label, Icons, IconContainer, ButtonContainer, TextContainer}