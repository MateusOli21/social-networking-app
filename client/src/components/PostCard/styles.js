import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    margin: 3.2rem 0;
    border-radius: 0.4rem;
    padding: 1.2rem 2.4rem;
    box-shadow: 0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 0.1);
`;

export const PostInfo = styled.div`
    margin-bottom: 1.2rem;

    h1 {
        font-size: var(--larger-size);
        margin-bottom: 0.4rem;
    }

    span {
        font-size: 1.3rem;
    }
`;

export const PostBody = styled.div`
    p {
        font-size: var(--normal-size);
        margin: 1.2rem 0;
    }
`;

export const Icons = styled.div`
    display: flex;
    pointer-events: ${({ hasUser }) => (hasUser ? 'visible' : 'none')};

    div {
        margin-right: 2.2rem;

        p {
            font-size: var(--small-size);
        }

        .icon {
            color: var(--primary-color);
            margin-right: 0.6rem;
            cursor: pointer;
        }
    }
`;
