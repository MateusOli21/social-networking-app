import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import { useAuthContext } from '../../Context/AuthContext';
import PostDeleteButton from '../PostDeleteButton';
import PostLikeButton from '../PostLikeButton';
import PostCommentButton from '../PostCommentButton';

import { Container, PostBody, PostInfo, Icons } from './styles';

const PostCard = ({ post }) => {
    const { user } = useAuthContext();

    return (
        <Container>
            <PostInfo>
                <h1>{post.username}</h1>
                <span>{moment(post.createdAt).fromNow()}</span>
            </PostInfo>
            <PostBody>
                <p>{post.body}</p>

                <Icons>
                    <PostLikeButton post={post} />

                    <PostCommentButton post={post} />

                    {user && user.username === post.username && (
                        <PostDeleteButton postId={post.id} />
                    )}
                </Icons>
            </PostBody>
        </Container>
    );
};

export default PostCard;
