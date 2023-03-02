import axios, { AxiosResponse } from 'axios';
import { InitProject } from '../../Interface/User';

export const createProject: (project: InitProject) => Promise<AxiosResponse<any, any>> = project => {
  return axios.post('http://localhost:8080/projects', project);
};
