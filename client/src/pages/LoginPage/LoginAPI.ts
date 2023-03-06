import axios, { AxiosResponse } from 'axios';
import { LoginForm, User } from '../../Interface/User';

export const login: (data: LoginForm) => Promise<AxiosResponse<User, any>> = (data: LoginForm) => {
  return axios.post<User>('http://localhost:8080/login', {},data);
};
