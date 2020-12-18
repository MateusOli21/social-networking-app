import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Container, PostBody, PostInfo, Icons } from './styles';

const PostCard = ({ post }) => {
    return (
        <Container>
            <PostInfo>
                <h1>{post.username}</h1>
                <span>{moment(post.createdAt).fromNow()}</span>
            </PostInfo>
            <PostBody>
                <p>{post.body}</p>

                <Icons>
                    <div className="icon-container">
                        <FaHeart size={20} className="icon" />
                        <p>{post.likesCount}</p>
                    </div>

                    <div className="icon-container">
                        <FaComment size={20} className="icon" />
                        <p>{post.commentsCount}</p>
                    </div>
                </Icons>
            </PostBody>
        </Container>
    );
};

export default PostCard;
