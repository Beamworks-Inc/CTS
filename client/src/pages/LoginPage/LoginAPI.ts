import axios, { AxiosResponse } from 'axios';
import { LoginForm, User } from 'Interface/User';

export const login: (data: LoginForm) => Promise<AxiosResponse<User, any>> = (data: LoginForm) => {
  return axios.get<User>('/api/spring', data);
};
