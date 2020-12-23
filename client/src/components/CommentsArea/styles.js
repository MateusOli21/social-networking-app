import styled from 'styled-components';

export const Container = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    margin: 1rem 0;
    padding-top: 1.2rem;

    .comments-counter {
        display: flex;
        flex-direction: column;

        p {
            font-size: var(--small-size);
            margin-right: 0.3rem;
        }
    }

    .comments {
        margin-top: 2rem;
    }
`;
