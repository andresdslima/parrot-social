import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import FeedContainer from '../../components/FeedContainer';
import FeedMessages from '../../components/FeedMessages';

function Feed(): JSX.Element {

  return (
    <Container>
      <Header />
      <FeedContainer />
      <FeedMessages />
    </Container>
  );
}

export default Feed;