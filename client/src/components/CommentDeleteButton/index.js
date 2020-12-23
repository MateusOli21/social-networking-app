import React from 'react';
import { useMutation } from '@apollo/client';
import { FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { DELETE_COMMENT } from '../../graphql/commentsQueries';

import { Container } from './styles';

const CommentDeleteButton = ({ postId, commentId }) => {
    const [deleteComment] = useMutation(DELETE_COMMENT, {
        variables: { postId, commentId },
        onError() {
            toast.warning(
                'Erro ao tentar excluir comentário. Tente novamente.'
            );
        },
    });

    const handleDeleteComment = () => deleteComment();

    return (
        <Container onClick={handleDeleteComment}>
            <FiTrash size={16} className="icon" />
            <p>Excluir</p>
        </Container>
    );
};

export default CommentDeleteButton;
