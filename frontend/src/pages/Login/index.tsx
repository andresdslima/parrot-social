import React from 'react';
import ContainerBackground from '../../components/ContainerBackground';
import LoginForm from '../../components/LoginForm';

const Home: React.FC = () => {
  return (
    <ContainerBackground>
        <LoginForm />
    </ContainerBackground>
  );
};

export default Home;