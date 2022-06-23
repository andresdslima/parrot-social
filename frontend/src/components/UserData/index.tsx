import React from 'react';
import * as Styled from './styled'
import user1 from '../../assets/user1.png'
import { User } from '../types';

interface ProfileDataProps {
    user: User[];
}

const UserData: React.FC<ProfileDataProps> = ({ user }) => {
    return (
        <Styled.Container>
             {user.map((user) => (
            <><Styled.UserContent>
                     <img src={user.avatar} alt="" />
                     <div className='contentProfile'>
                         <h1>{user.name}</h1>
                         <h2>apê {user.apartment}</h2>
                         <h2>{user.email}</h2>
                         <h2> publicações</h2></div>
                 </Styled.UserContent><div className='buttonProfile'>
                         <Styled.ButtonFeed type="button">editar perfil</Styled.ButtonFeed>
                     </div></>
             ))}
        </Styled.Container>
    );
};

export default UserData;