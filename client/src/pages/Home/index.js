import React from 'react';
import { useQuery } from '@apollo/client';

import Navbar from '../../components/Navbar';

import { Container, Content } from './styles';
import { FETCH_POSTS } from './query';
import PostCard from '../../components/PostCard';

const Home = () => {
    const { data } = useQuery(FETCH_POSTS);

    return (
        <>
            <Navbar />
            <Container>
                <Content>
                    {data ? (
                        data.getPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))
                    ) : (
                        <h1>Carregando</h1>
                    )}
                </Content>
            </Container>
        </>
    );
};

export default Home;
