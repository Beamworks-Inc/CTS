import { BasicRegisterForm, RegisterForm, ReviewerRegisterForm, User } from '../../Interface/User';
import axios, { AxiosResponse } from 'axios';

const defaultUrl="/api/spring";

const registerAPI = {
  pi: (data: BasicRegisterForm,url=defaultUrl) => axios.post(url+'/register/pi', data),
  researcher: (data: BasicRegisterForm,url=defaultUrl) => axios.post(url+'/register/researcher', data),
  reviewer: (data: ReviewerRegisterForm,url=defaultUrl) => axios.post(url+'/register/reviewer', data),
};

export default registerAPI;
