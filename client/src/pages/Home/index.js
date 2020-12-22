import React from 'react';
import { useQuery } from '@apollo/client';

import Navbar from '../../components/Navbar';
import PostCard from '../../components/PostCard';
import CreatePost from '../../components/CreatePost';

import { FETCH_POSTS } from '../../graphql/postsQueries';
import { useAuthContext } from '../../Context/AuthContext';

import { Container, Content } from './styles';

const Home = ({ history }) => {
    const { data } = useQuery(FETCH_POSTS);

    const { user } = useAuthContext();

    return (
        <>
            <Navbar history={history} />
            <Container>
                <Content>
                    {user && <CreatePost />}
                    {data ? (
                        data.getPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))
                    ) : (
                        <h1>Carregando...</h1>
                    )}
                </Content>
            </Container>
        </>
    );
};

export default Home;
