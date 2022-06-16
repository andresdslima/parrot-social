import React from 'react';
import * as Styled from './styled'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createPost } from '../../services/MainAPI/posts';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { addNewPost } from '../../store/post';


const FeedContainer: React.FC = () => {

  const user_id = useSelector((state: RootState) => state.usersSlice.user_id) as number;
  const name = useSelector((state: RootState) => state.usersSlice.name) as string;
  const apartment = useSelector((state: RootState) => state.usersSlice.apartment) as number;
  const avatar = useSelector((state: RootState) => state.usersSlice.avatar) as string;
  const created_at = useSelector((state: RootState) => state.usersSlice.created_at) as string;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
  post_id: 0,
  user_id: 0,
  content: '',
  name: '',
  apartment: 0,
  avatar: '',
  created_at: '',
    },
    onSubmit: async values => {
      const data = await createPost({...values, user_id: user_id, 
        apartment: apartment, avatar: avatar, name: name, created_at: created_at });
      dispatch(addNewPost({post: data}));
    }
  })

  return (
    <Styled.Container>   
      <img src={avatar}/>
      <Styled.FormFeed onSubmit={formik.handleSubmit}>
      <textarea
       name='message'
       id='message'
      placeholder='Coloque aqui a sua mensagem' value={formik.values.content} onChange={formik.handleChange}/>
                <Styled.ButtonFeed type='submit'>publicar</Styled.ButtonFeed>
                </Styled.FormFeed>
</Styled.Container>
  )
}

export default FeedContainer;