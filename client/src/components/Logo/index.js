import React from 'react';
import { Link } from 'react-router-dom';

import { Text } from './styles';

const Logo = ({ bigger }) => {
    return (
        <Link to="/">
            <Text bigger={bigger}>DevShare</Text>
        </Link>
    );
};

export default Logo;
