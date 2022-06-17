import React from 'react';
import * as Styled from './styled'
import { Post } from '../types';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { renderPostsById } from '../../services/MainAPI/posts';
import { useEffect, useState } from "react";


const FeedUser: React.FC = () => {

    let id = parseInt(window.location.search.split('?')[1])

    const [postListById, setPostListByID] = useState<Post[]>([] as Post[]);
    
    useEffect(() => {
      let listById = async () =>  {
       await renderPostsById(id).then(posts => setPostListByID(posts))
      }
      listById()
    })
    console.log(postListById)


return (


      <Styled.Container>  
        {postListById.map(post => (
    <Styled.CardContainer>
    <img src={post.avatar}/>
     <Styled.CardBody>
    <h1>{post.name} - apê{post.apartment}</h1>
        <h2>{post.created_at}</h2>
    <p>{post.content}</p>
    </Styled.CardBody>
                </Styled.CardContainer> 
                )).reverse()}
</Styled.Container>
)}

export default FeedUser;