import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { CREATE_POST, FETCH_POSTS } from '../../graphql/postsQueries';

import { Container, Form } from './styles';

const CreatePost = () => {
    const [message, setMessage] = useState('');

    const handleChange = (event) => setMessage(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (message.trim() === '')
            return toast.warning('Você deve escrever algo antes de publicar.');

        createPost();
        setMessage('');
    };

    const [createPost] = useMutation(CREATE_POST, {
        variables: { body: message },
        update(proxy, result) {
            const data = proxy.readQuery({ query: FETCH_POSTS });

            proxy.writeQuery({
                query: FETCH_POSTS,
                data: {
                    getPosts: [result.data.createPost, ...data.getPosts],
                },
            });
        },
        onError(err) {
            toast.warning(
                'Ocorreu um erro ao tentar publicar sua postagem. Tente novamente.'
            );
        },
    });

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Comece a sua publicação..."
                />
                <button>Publicar</button>
            </Form>
        </Container>
    );
};

export default CreatePost;
