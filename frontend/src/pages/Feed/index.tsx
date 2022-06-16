import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import FeedContainer from '../../components/FeedContainer';
import FeedMessages from '../../components/FeedMessages';
const Feed: React.FC = () => {
  return (
    <Container>
    <Header />
    <FeedContainer />
    <FeedMessages post_id={0} user_id={0} content={''} name={''} apartment={0} avatar={''} />
    </Container>
  )
}
  
  export default Feed;