import { gql } from '@apollo/client';

const FETCH_POSTS = gql`
    {
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

export { FETCH_POSTS };
