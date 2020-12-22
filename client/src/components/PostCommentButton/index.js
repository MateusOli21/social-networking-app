import React, { useEffect, useState } from 'react';
import { FaComment, FaRegComment } from 'react-icons/fa';
import { useAuthContext } from '../../Context/AuthContext';

import { Container } from './styles';

const PostCommentButton = ({ post }) => {
    const [commented, setCommented] = useState(false);
    const { user } = useAuthContext();

    useEffect(() => {
        if (
            user &&
            post.comments &&
            post.comments.find((comment) => comment.username === user.username)
        ) {
            setCommented(true);
        } else {
            setCommented(false);
        }
    }, [post.comments, user]);

    return (
        <Container>
            {commented ? (
                <FaComment size={20} className="icon" fill="red" />
            ) : (
                <FaRegComment size={20} className="icon" />
            )}
            <p>{post.commentsCount}</p>
        </Container>
    );
};

export default PostCommentButton;
