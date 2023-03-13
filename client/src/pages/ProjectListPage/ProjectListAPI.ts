import axios, { AxiosResponse } from 'axios';
import { Project } from '../../Interface/User';

export const getProjects: () => Promise<AxiosResponse<Project[], any>> = () => {
  return axios.get('/api/spring/project');
};
