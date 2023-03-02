import axios, {AxiosResponse} from "axios";
import {Reviewer} from "../../Interface/User";

export const getReviewers: () => Promise<AxiosResponse<Reviewer,any>> = () => {
    return axios.get<Reviewer>("http://localhost:8080/reviewers");
}

export const setProjectParticipate: (projectId: string, reviewerId: string[])=>Promise<AxiosResponse<any, any>> = (projectId: string, reviewerId: string[]) => {
    return axios.post(`http://localhost:8080/projects/${projectId}/reviewers`, reviewerId);
}