import { gql } from '@apollo/client';

const FETCH_POSTS = gql`
    query {
        getPosts {
            id
            username
            body
            createdAt
            likesCount
            commentsCount
            comments {
                username
                body
                createdAt
                id
            }
        }
    }
`;

const CREATE_POST = gql`
    mutation createPost($body: String!) {
        createPost(body: $body) {
            id
            username
            body
            createdAt
            likesCount
            commentsCount
            likes {
                id
                username
            }
            comments {
                id
                username
                body
                createdAt
            }
        }
    }
`;

export { FETCH_POSTS, CREATE_POST };
