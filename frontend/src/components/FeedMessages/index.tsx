import React from 'react';
import * as Styled from './styled'
import { createPost } from '../../services/MainAPI/posts';
import { Post } from '../types';

interface PostFeedProps {
  posts: Post[];
}



const FeedMessages: React.FC<PostFeedProps> = ({ posts }) => {

return (

  {posts.map((post: => (
      <Styled.Container>  
    <Styled.CardContainer>
    <img src={post.avatar}/>
     <Styled.CardBody>
    <h1>{post.name} - apê{post.apartment}</h1>
        <h2>{post.created_at}</h2>
    <p>{post.content}</p>
    </Styled.CardBody>
                </Styled.CardContainer> 
</Styled.Container>
    )).reverse()}



)
}

export default FeedMessages;