import React from 'react';

import { Button } from './styles';

const SignButton = ({ children }) => {
    return <Button type="submit">{children}</Button>;
};

export default SignButton;
