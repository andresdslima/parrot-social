import React from 'react';
import logoFeed from '../../assets/logo-feed.png';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
import { Nav, Navbar, Container } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { signOut } from "../../store/users";

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const handleLogout =() => {
    dispatch(signOut())
    alert("Deslogado")
  }


  return (  <Styled.Header>
    <div className="logo-area">
      <Styled.Img src={logoFeed} alt="omma" />
    </div>
    <Styled.Nav className="menu">
      <ul>
        <li>
          <h3>Olá, usuário</h3>
        </li>
        <div className="vr"/>
        <li>
          <Link to="" onClick={handleLogout} >sair</Link>
        </li>
        </ul>
    </Styled.Nav>
  </Styled.Header>)
}

export default Header;