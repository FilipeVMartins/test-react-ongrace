import React from 'react';
import axios, { AxiosError } from './libs/axios';
import useSWR, { SWRResponse } from 'swr';
import './App.css';
import MainTop from './components/layout/MainTop';
import MainFooter from './components/layout/MainFooter';
import { userData } from './types';
import ListUsersCards from './components/user/ListUsersCards';

const App = () => {
  const getUsersUrl = 'https://fakerapi.it/api/v1/users?_quantity=20&_gender=male&_seed=1';

  const getUsers = () => {
    return axios
      .get(getUsersUrl)
      .then((res) => {
        console.log('res: ', res.data.data);
        return res.data.data;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };

  const { data: usersData, error: getUsersError }: SWRResponse<userData[], AxiosError> = useSWR(getUsersUrl, getUsers);

  return (
    <div className="main-app">
      <MainTop pageTitle="Lista de usuários" />
      <div className="main-content">
        <ListUsersCards usersData={usersData} />
      </div>
      <MainFooter />
    </div>
  );
};

export default App;
