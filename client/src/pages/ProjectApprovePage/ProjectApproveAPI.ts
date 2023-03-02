import axios, { AxiosResponse } from 'axios';

export const approveParticipant: (projectId: number, piId: number) => Promise<AxiosResponse<any, any>> = (
  projectId: number,
  piId: number,
) => {
  return axios.post(`http://localhost:8080/approve-participant?projectId=${projectId}&piId=${piId}`);
};
