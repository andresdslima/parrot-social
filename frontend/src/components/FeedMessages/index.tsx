import React, { useEffect, useState } from 'react';
import * as Styled from './styled'
import { Post, User } from '../types';
import { useNavigate } from "react-router-dom";
import { getUsers } from '../../services/MainAPI/users';
import { createPost, renderPosts } from '../../services/MainAPI/posts';
import * as Yup from 'yup';
import { useFormik } from 'formik';
interface PostFeedProps {
  posts: Post[]
};

const FeedMessages = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([] as Post[]);
  const [users, setUsers] = useState<User>({} as User);
  let id = parseInt(window.location.search.split('?')[1]);

  useEffect(() => {
    const pegarUser = async () => {
      const user = await getUsers(id);
      setUsers(user);
      // dispatch(setUsersEdit({ users: user }))
    };

    let handlePost = async () => {
      const response = await renderPosts();
      setPosts(response);
    };

    handlePost();
    pegarUser();
  }, []);

  console.log(posts);

  const validationSchema = Yup.object({
    texto: Yup.string().required('O nome é obrigatório'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      content: '',
    },
    validationSchema,
    onSubmit: async values => {
      const response = await createPost({
        content: values.content, user_id: users.user_id,
        post_id: 0
      });
      console.log(response);
      window.location.reload();
    }
  });

  // posts.map(post => post.user_id);

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