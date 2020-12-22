import React from 'react';
import { useMutation } from '@apollo/client';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { DELETE_POST, FETCH_POSTS } from '../../graphql/postsQueries';

import { Container } from './styles';

const PostDeleteButton = ({ postId }) => {
    const [deletePost] = useMutation(DELETE_POST, {
        variables: { id: postId },
        update(proxy, result) {
            toast.success('Publicação deletada com sucesso.');

            const data = proxy.readQuery({ query: FETCH_POSTS });

            proxy.writeQuery({
                query: FETCH_POSTS,
                data: {
                    getPosts: [
                        ...data.getPosts.filter((post) => post.id !== postId),
                    ],
                },
            });
        },
        onError() {
            toast.warning(
                'Erro ao tentar excluir publicação. Tente novamente.'
            );
        },
    });

    const handleDeletePost = () => deletePost();

    return (
        <Container>
            <FaTrashAlt size={20} className="icon" onClick={handleDeletePost} />
        </Container>
    );
};

export default PostDeleteButton;
