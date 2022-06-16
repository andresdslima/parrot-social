import React from 'react';
import * as Styled from './styled'
import user1 from '../../assets/user1.png';
import { Button } from 'react-bootstrap'

const FeedContainer: React.FC = () => {
  return (
    <Styled.Container>   
      <img src={user1}/>
      <Styled.FormFeed>
      <textarea
       name='message'
       id='message'
      placeholder='Coloque aqui a sua mensagem'
      // valuStyled.FormFeedik.values.message}
      // onChange={formik.handleChange}
                />
                <Styled.ButtonFeed type='submit'>publicar</Styled.ButtonFeed>
                </Styled.FormFeed>
</Styled.Container>
  )
}

export default FeedContainer;