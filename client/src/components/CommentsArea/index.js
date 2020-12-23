import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { FETCH_POST } from '../../graphql/postsQueries';

import { Container } from './styles';
import Comment from '../Comment';

const CommentsArea = ({ postId }) => {
    const [post, setPost] = useState(null);

    const { data } = useQuery(FETCH_POST, {
        variables: { id: postId },
    });

    useEffect(() => {
        if (data) setPost(data.getPost);
    }, [data]);

    if (!post) return <h1>Carregando...</h1>;

    let quantity =
        post.commentsCount > 1 || post.commentsCount === 0
            ? 'comentários'
            : 'comentário';

    return (
        <Container>
            <div className="comments-counter">
                <p>
                    {post.commentsCount} {quantity}
                </p>
            </div>
            <div className="comments">
                {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </Container>
    );
};

export default CommentsArea;
