import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.6rem 0;

    label {
        margin-bottom: 0.4rem;
        font-size: var(--normal-size);
        color: var(--gray-color);
    }

    input {
        padding: 1.2rem 0.4rem;
        border-radius: 0.5rem;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
`;
