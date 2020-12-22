import { gql } from '@apollo/client';

const FETCH_POSTS = gql`
    query {
        getPosts {
            id
            username
            body
            createdAt
            likesCount
            likes {
                username
            }
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

const LIKE_POST = gql`
    mutation likePost($postId: ID!) {
        likePost(postId: $postId) {
            id
            likesCount
            likes {
                id
                username
            }
        }
    }
`;

export { FETCH_POSTS, CREATE_POST, LIKE_POST };
