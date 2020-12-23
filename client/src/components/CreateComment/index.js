import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { CREATE_COMMENT } from '../../graphql/commentsQueries';

import { Container, Form } from './styles';

const CreateComment = ({ postId }) => {
    const [comment, setComment] = useState('');

    const handleChangeComment = (event) => setComment(event.target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (comment.trim() === '')
            return toast.warning('Você deve escrever algo antes de comentar.');

        createComment();
        setComment('');
    };

    const [createComment] = useMutation(CREATE_COMMENT, {
        variables: { postId, body: comment },
        onError() {
            toast.warning('Erro ao tentar comentar. Tente novamente.');
        },
    });

    return (
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Adicionar um comentário..."
                    value={comment}
                    onChange={handleChangeComment}
                />
                <button type="submit">Comentar</button>
            </Form>
        </Container>
    );
};

export default CreateComment;
