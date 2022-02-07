import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 10vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid lightgrey;
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
`

export { Container, Content, ContentContainer }