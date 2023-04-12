import React from 'react';
import { userData } from '../../types';

interface UserCardProps {
  userData: userData;
}

const UserCard: React.FC<UserCardProps> = ({ userData }) => (
  <article className="user-index-card">
    <figure>
      <img src={userData.image} width="auto" height="auto" alt="Foto usuário" />
    </figure>
    <div className="user-info">
      <h2>{userData.firstname + ' ' + userData.lastname}</h2>
      <span>
        Usuário: <b>{userData.username}</b>
      </span>
      <span>
        E-mail: <b>{userData.email}</b>
      </span>
      <a href={userData.website}>
        <b>{userData.website}</b>
      </a>
    </div>
  </article>
);

export default UserCard;
