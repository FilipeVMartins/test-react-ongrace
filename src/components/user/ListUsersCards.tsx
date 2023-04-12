import React from 'react';
import { userData } from '../../types';
import UserCard from './UserCard';

interface ListUsersCardsProps {
  usersData: userData[] | undefined;
}

const ListUsersCards: React.FC<ListUsersCardsProps> = ({ usersData }) => {
  const listItems = React.useMemo(
    () => usersData?.map((userData) => <UserCard userData={userData} key={userData.id} />),
    [usersData],
  );

  return <div className="list-users-index-cards">{listItems}</div>;
};

export default ListUsersCards;
