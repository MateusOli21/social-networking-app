import styled from 'styled-components';

export const Container = styled.div`
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        width: 100%;
        max-width: 44rem;
    }

    @media screen and (max-width: 930px) {
        display: none;
    }
`;
