import React from 'react';
import * as Styled from './styled'
import { Post } from '../types';

interface PostFeedProps {
  posts: Post[]
};

const FeedMessages = ({ posts }: PostFeedProps) => {
  return (

      <Styled.Container>
        {posts.map(post => (
          <Styled.CardContainer>
            <img src={post.avatar} />
            <Styled.CardBody>
              <h1>{post.name} - apê{post.apartment}</h1>
              <h2>{post.created_at}</h2>
              <p>{post.content}</p>
            </Styled.CardBody>
          </Styled.CardContainer>
          ))}
      </Styled.Container>
  );
};

export default FeedMessages;