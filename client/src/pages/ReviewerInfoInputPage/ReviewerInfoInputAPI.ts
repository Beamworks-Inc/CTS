import axios, { AxiosResponse } from 'axios';
import { Reviewer } from '../../Interface/User';

export const setReviewerInfo: (reviewerInfo: Reviewer) => Promise<AxiosResponse<any, any>> = (
  reviewerInfo: Reviewer,
) => {
  return axios.post('http://localhost:8080/reviewers', reviewerInfo);
};
