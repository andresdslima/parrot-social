import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import FeedContainer from '../../components/FeedContainer';
import FeedMessages from '../../components/FeedMessages';
import { usePost } from '../../hooks/usePost';


function Feed(): JSX.Element {

  const postList = usePost() 

  return (
    <Container>
    <Header />
    <FeedContainer />
    <FeedMessages posts={postList} />
    </Container>
  );
}

export default Feed;