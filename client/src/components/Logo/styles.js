import styled from 'styled-components';

export const Text = styled.h1`
    color: var(--primary-color);
    font-size: ${({ bigger }) =>
        bigger ? 'var(--h3-size)' : 'var(--larger-size)'};
`;
