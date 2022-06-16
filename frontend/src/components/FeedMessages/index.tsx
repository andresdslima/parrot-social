import React from 'react';
import * as Styled from './styled'
import { createPost } from '../../services/MainAPI/posts';

interface PostFeedProps {
  post_id: number,
  user_id: number,
  content: string,
  name: string,
  apartment: number,
  avatar: string,
  created_at?: string,
  updated_at?: string,
    }



const FeedMessages: React.FC<PostFeedProps> = (props: PostFeedProps) => {

return (

<Styled.Container>  
    <Styled.CardContainer>
    <img src={props.avatar}/>
     <Styled.CardBody>
    <h1>{props.name} - apê{props.apartment}</h1>
        <h2>{props.created_at}</h2>
    <p>{props.content}</p>
    </Styled.CardBody>
                </Styled.CardContainer> 
</Styled.Container>


)
}

export default FeedMessages;