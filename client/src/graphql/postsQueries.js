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

const FETCH_POST = gql`
    query getPost($id: ID!) {
        getPost(id: $id) {
            id
            username
            body
            createdAt
            likesCount
            commentsCount
            likes {
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

const DELETE_POST = gql`
    mutation deletePost($id: ID!) {
        deletePost(id: $id) {
            id
            likesCount
        }
    }
`;

export { FETCH_POSTS, FETCH_POST, CREATE_POST, LIKE_POST, DELETE_POST };
