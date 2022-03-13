import styled from 'styled-components';

const Styles = styled.div `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ContentContainer = styled.div`
    display: grid;
    gap: 1rem;

    img {
        width: 100%;
        height: 100%;
    }

    p {
        margin: 0;
        font-size: clamp(.75rem, 1vw, 1rem);
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    @media (min-width: 480px) {
        img {
            height: 50vh;
        }
    }
`
export { Styles, ContentContainer };
