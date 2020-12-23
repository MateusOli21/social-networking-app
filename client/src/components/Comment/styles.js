import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 1.6rem;

    .comment-info {
        display: flex;
        align-items: center;

        h1 {
            font-size: var(--small-size);
            margin-right: 0.6rem;
        }

        span {
            font-size: 1.2rem;
        }
    }

    .comment-body {
        margin-top: 0.6rem;
        font-size: var(--small-size);
    }
`;
