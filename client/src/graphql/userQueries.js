import { gql } from '@apollo/client';

const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            id
            username
            email
            token
            createdAt
        }
    }
`;

const REGISTER_USER = gql`
    mutation createUser(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        createUser(
            data: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ) {
            id
            email
            username
            createdAt
        }
    }
`;

export { LOGIN_USER, REGISTER_USER };
