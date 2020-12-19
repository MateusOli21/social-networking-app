import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2.2rem;

    @media screen and (min-width: 930px) {
        width: 50vw;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 42rem;
    margin-top: 1.2rem;

    form {
        margin: 1.6rem 0;
    }
`;
