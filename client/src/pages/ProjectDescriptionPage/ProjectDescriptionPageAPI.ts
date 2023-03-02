import axios, {AxiosResponse} from "axios";
import {Project} from "../../Interface/User";

export const getProjectDescription: (projectId: number)=>  Promise<AxiosResponse<Project,any>> = (projectId: number) => {
    return axios.get<Project>(`http://localhost:8080/projects/${projectId}`);
}