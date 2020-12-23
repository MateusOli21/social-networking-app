import styled from 'styled-components';

export const Container = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
    padding: 1.2rem 0;

    .comments-counter {
        display: flex;
        margin-bottom: 1.6rem;

        p {
            font-size: var(--small-size);
            margin-right: 0.3rem;
        }
    }
`;
