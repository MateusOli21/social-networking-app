import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';

import { FETCH_POST } from '../../graphql/postsQueries';
import CreateComment from '../CreateComment';
import Comment from '../Comment';
import Loading from '../Loading';

import { Container } from './styles';

const CommentsArea = ({ postId }) => {
    const [post, setPost] = useState(null);

    const { data } = useQuery(FETCH_POST, {
        variables: { id: postId },
    });

    useEffect(() => {
        if (data) setPost(data.getPost);
    }, [data]);

    if (!post) return <Loading />;

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
