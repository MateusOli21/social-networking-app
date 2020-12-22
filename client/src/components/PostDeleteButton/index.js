import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { Container } from './styles';

const PostDeleteButton = (postId) => {
    return (
        <Container>
            <FaTrashAlt size={20} className="icon" />
        </Container>
    );
};

export default PostDeleteButton;
