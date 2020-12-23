import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2.8rem;
    cursor: pointer;

    .icon {
        color: var(--primary-color);
        margin-right: 0.6rem;
    }

    p {
        font-size: var(--small-size);
    }
`;
