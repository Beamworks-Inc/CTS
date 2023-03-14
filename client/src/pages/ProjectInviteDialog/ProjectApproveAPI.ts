import axios, { AxiosResponse } from 'axios';

export const invitePI: (projectId: number, piId: number) => Promise<AxiosResponse<any, any>> = (projectId, piId) => {
  return axios.post(`/api/spring/invite/pi?projectId=${projectId}&piId=${piId}`);
}

export const inviteReviewer: (projectId: number, reviewerId: number) => Promise<AxiosResponse<any, any>> = (projectId, reviewerId) => {
  return axios.post(`/api/spring/invite/reviewer?projectId=${projectId}&reviewerId=${reviewerId}`);
}