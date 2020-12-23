import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { FETCH_POST } from '../../graphql/postsQueries';
import CreateComment from '../CreateComment';
import Comment from '../Comment';

import { Container } from './styles';
import { AnimatePresence } from 'framer-motion';

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

                <CreateComment postId={postId} />
            </div>
            <div className="comments">
                <AnimatePresence>
                    {post.comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            postId={postId}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </Container>
    );
};

export default CommentsArea;
