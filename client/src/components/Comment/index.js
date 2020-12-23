import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import CommentDeleteButton from '../CommentDeleteButton';
import { useAuthContext } from '../../Context/AuthContext';
import commentVariants from './animations';

import { Container } from './styles';

const Comment = ({ comment, postId }) => {
    const { user } = useAuthContext();

    return (
        <Container
            variants={commentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="comment-info">
                <h1>{comment.username}</h1>
                <span>{moment(comment.createdAt).fromNow()}</span>
            </div>

            <div className="comment-body">
                <p>{comment.body}</p>
            </div>

            {user.username === comment.username && (
                <div className="comments-buttons">
                    <CommentDeleteButton
                        postId={postId}
                        commentId={comment.id}
                    />
                </div>
            )}
        </Container>
    );
};

export default Comment;
