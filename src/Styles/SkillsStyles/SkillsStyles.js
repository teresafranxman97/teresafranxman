import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    height: 100vh;
`

const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    border: 1px solid lightgrey;
`

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
`

export { Container, Content, ContentContainer }