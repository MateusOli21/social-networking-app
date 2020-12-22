import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { useAuthContext } from '../../Context/AuthContext';

import { Container } from './styles';
import { LIKE_POST } from '../../graphql/postsQueries';

const PostLikeButton = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const { user } = useAuthContext();

    useEffect(() => {
        if (
            user &&
            post.likes &&
            post.likes.find((like) => like.username === user.username)
        ) {
            setLiked(true);
        } else {
            setLiked(false);
        }
    }, [post.likes, user]);

    const [likePost] = useMutation(LIKE_POST, {
        variables: { postId: post.id },
    });

    const handleLikeButton = () => {
        likePost();

        // setLiked(!liked);
    };

    return (
        <Container>
            {liked ? (
                <FaHeart
                    size={20}
                    className="icon"
                    onClick={handleLikeButton}
                />
            ) : (
                <FaRegHeart
                    size={20}
                    className="icon"
                    onClick={handleLikeButton}
                />
            )}
            <p>{post.likesCount}</p>
        </Container>
    );
};

export default PostLikeButton;
