import React from 'react';
import * as Styled from './styled'
import user1 from '../../assets/user1.png'


const UserData: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.UserContent>
            <img src={user1} alt="" />
                <div className='contentProfile'>
                    <h1>Ra</h1>
                    <h2>apê 82 </h2>
                    <h2>user@mail.com</h2>
                    <h2>00 publicações</h2></div>
                </Styled.UserContent>
                <div className='buttonProfile'>
            <Styled.ButtonFeed type="button">editar perfil</Styled.ButtonFeed>
            </div>
        </Styled.Container>
    );
};

export default UserData;