import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 1.2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
    display: flex;
    align-items: center;

    input {
        width: 90%;
        margin-right: 1.2rem;
        padding: 0.6rem 0.4rem;
        border: none;

        &::placeholder {
            color: var(--gray-color);
        }
    }

    button {
        padding: 0.6rem 1.2rem;
        background: none;
        border: none;
        font-weight: var(--bold-weight);
        color: var(--primary-color);
        cursor: pointer;
    }
`;
