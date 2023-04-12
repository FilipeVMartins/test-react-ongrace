import Axios, { AxiosResponse as AxiosResponseBase, AxiosError as AxiosErrorBase } from 'axios';

const axios = Axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export type AxiosResponse = AxiosResponseBase;
export type AxiosError = AxiosErrorBase;

export default axios;
