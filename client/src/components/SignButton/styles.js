import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    padding: 1.8rem 3.6rem;
    margin-top: 1.4rem;
    border: none;
    border-radius: 0.5rem;
    font-size: var(--larger-size);
    color: var(--white-color);
    font-weight: var(--bold-weight);
    background: var(--primary-color);
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
        background: var(--primary-alt-color);
    }
`;
