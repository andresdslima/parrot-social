import React from 'react';
import UserData from '../../components/UserData';
import Header from '../../components/Header';
import Container from '../../components/Container';
import FeedUser from '../../components/FeedUser';
// import { Container } from './styles';

const User: React.FC = () => {
  return (
    <Container>
        <Header />
        <UserData />
        <FeedUser />
    </Container>
  )
}

export default User;