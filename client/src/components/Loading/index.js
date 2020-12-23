import React from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

const Loading = () => {
    return (
        <Container>
            <Loader color="#581b98" type="TailSpin" width={45} />;
        </Container>
    );
};

export default Loading;
