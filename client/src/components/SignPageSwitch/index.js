import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const SignPageSwitch = ({ path, linkText, switchText }) => {
    return (
        <Container>
            {switchText} <Link to={path}>{linkText}</Link>
        </Container>
    );
};

export default SignPageSwitch;
