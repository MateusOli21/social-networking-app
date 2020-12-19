import React from 'react';
import { useQuery } from '@apollo/client';

import Navbar from '../../components/Navbar';
import PostCard from '../../components/PostCard';
import { FETCH_POSTS } from './query';

import { Container, Content } from './styles';

const Home = ({ history }) => {
    const { data } = useQuery(FETCH_POSTS);

    return (
        <>
            <Navbar history={history} />
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
