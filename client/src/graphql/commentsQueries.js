import { gql } from '@apollo/client';

const CREATE_COMMENT = gql`
    mutation createComment($postId: ID!, $body: String!) {
        createComment(postId: $postId, body: $body) {
            id
            commentsCount
            comments {
                id
                username
                body
                createdAt
            }
        }
    }
`;

const DELETE_COMMENT = gql`
    mutation deleteComment($postId: ID!, $commentId: ID!) {
        deleteComment(postId: $postId, commentId: $commentId) {
            id
            commentsCount
            comments {
                id
                username
                body
                createdAt
            }
        }
    }
`;

export { CREATE_COMMENT, DELETE_COMMENT };
