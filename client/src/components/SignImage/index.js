import React from 'react';

import { Container } from './styles';

const SignImage = ({ src, alt }) => {
    return (
        <Container>
            <img src={src} alt={alt} />
        </Container>
    );
};

export default SignImage;
