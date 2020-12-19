import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../Context/AuthContext';

const AuthRoute = ({ component: Component, isPrivate, ...rest }) => {
    const { user } = useAuthContext();

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );
};

export default AuthRoute;
