import axios, { AxiosResponse } from 'axios';
import { Project } from '../../Interface/User';

export const getProjects: () => Promise<AxiosResponse<Project[], any>> = () => {
  return axios.get('/api/spring/project');
};

// dummys
// const rows: Array<ProjectListItem> = [
//   {
//     id: 1,
//     name: 'Project 1',
//     description: 'This is a description of project 1',
//     pi: {
//       id: 1,
//       name: 'PI 1',
//       email: 'pi@gmail.com',
//       role: 'PI',
//       projectIds: [1, 2, 3],
//     },
//     researcher: {
//       id: 2,
//       name: 'RESEARCHER 1',
//       email: 'researcher@gmail.com',
//       role: 'RESEARCHER',
//       projectIds: [1, 2, 3],
//     },
//     reviewer: [
//       {
//         id: 3,
//         name: 'REVIEWER 1',
//         email: 'reviewer@gmail.com',
//         role: 'REVIEWER',
//         info: {
//           isRadiologist: 'Yes',
//           hasMoreThan3YearsOfExperience: true,
//         },
//       },
//       {
//         id: 3,
//         name: 'REVIEWER 1',
//         email: 'reviewer@gmail.com',
//         role: 'REVIEWER',
//         info: {
//           isRadiologist: 'Yes',
//           hasMoreThan3YearsOfExperience: true,
//         },
//       },
//     ],
//   },
// ];
