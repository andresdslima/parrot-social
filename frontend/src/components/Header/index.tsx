import React from 'react';
import logoFeed from '../../assets/logo-feed.png';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
import { Nav, Navbar, Container } from 'react-bootstrap';


const Header: React.FC = () => {
  return (  <Styled.Header>
    <div className="logo-area">
      <Styled.Img src={logoFeed} alt="omma" />
    </div>
    <Styled.Nav className="menu">
      <ul>
        <li>
          <h3>Olá, usuário</h3>
        </li>
        <div className="vr" />
        <li>
          <Link to="/logout">sair</Link>
        </li>
        </ul>
    </Styled.Nav>
  </Styled.Header>)
}

export default Header;