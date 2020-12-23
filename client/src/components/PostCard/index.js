import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import PostDeleteButton from '../PostDeleteButton';
import PostLikeButton from '../PostLikeButton';
import PostCommentButton from '../PostCommentButton';
import CommentsArea from '../CommentsArea';
import { useAuthContext } from '../../Context/AuthContext';
import cardVariants from './animations';

import { Container, PostBody, PostInfo, Icons } from './styles';

const PostCard = ({ post }) => {
    const { user } = useAuthContext();
    const [commentsOpen, setCommentsOpen] = useState(false);

    const handleOpenComments = () => setCommentsOpen(!commentsOpen);

    return (
        <Container variants={cardVariants} initial="hidden" animate="visible">
            <PostInfo>
                <h1>{post.username}</h1>
                <span>{moment(post.createdAt).fromNow()}</span>
            </PostInfo>
            <PostBody>
                <p>{post.body}</p>

                <Icons hasUser={user}>
                    <PostLikeButton post={post} />

                    <PostCommentButton
                        post={post}
                        handleOpenComments={handleOpenComments}
                    />

                    {user && user.username === post.username && (
                        <PostDeleteButton postId={post.id} />
                    )}
                </Icons>
            </PostBody>

            {commentsOpen && (
                <CommentsArea postId={post.id} commentsOpen={commentsOpen} />
            )}
        </Container>
    );
};

export default PostCard;
