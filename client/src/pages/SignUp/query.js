import { gql } from '@apollo/client';

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

export default REGISTER_USER;
