import React, { createContext, useContext, useEffect, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

import authReducer from './authReducer';

const AuthContext = createContext({
    user: null,
    login: (data) => {},
    logout: () => {},
});

const AuthProvider = ({ children }) => {
    let initialState = {
        user: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) return;

        const decodedToken = jwtDecode(token);

        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
            return;
        }

        const decodedUser = { ...decodedToken, token };

        login(decodedUser);
    }, []);

    function login(userData) {
        localStorage.setItem('token', userData.token);

        dispatch({
            type: 'LOGIN',
            payload: userData,
        });
    }

    function logout(userData) {
        localStorage.removeItem('token');

        dispatch({
            type: 'LOGOUT',
        });
    }

    return (
        <AuthContext.Provider value={{ user: state.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuthContext };
