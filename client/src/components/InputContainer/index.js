import React from 'react';

import { Container } from './styles';

const InputContainer = ({ text, name, type, value, onChange, placeholder }) => {
    return (
        <Container>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Container>
    );
};

export default InputContainer;
