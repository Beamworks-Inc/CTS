import { RegisterForm, ReviewerRegisterForm } from 'Interface/User';
import axios, { AxiosResponse as AR } from 'axios';

const defaultUrl = '/api/spring';

const registerAPI = {
  pi: (data: RegisterForm, url = defaultUrl): Promise<AR> => axios.post(url + '/register/pi', data),
  researcher: (data: RegisterForm, url = defaultUrl): Promise<AR> => axios.post(url + '/register/researcher', data),
  reviewer: (data: ReviewerRegisterForm, url = defaultUrl): Promise<AR> => axios.post(url + '/register/reviewer', data),
};

export default registerAPI;
