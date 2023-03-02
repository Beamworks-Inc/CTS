import axios, {AxiosResponse} from "axios";

interface ProjectNameAndIds {
    id: number;
    name: string;
}

export const getProjectNameAndIds: () => Promise<AxiosResponse<ProjectNameAndIds,any>> = () => {
    return axios.get("http://localhost:8080/projects/nameAndIds");
}

export const requestProjectParticipate: (projectId: number[], piId: number)=>Promise<AxiosResponse<any,any>> = (projectId: number[], piId: number) =>{
    return axios.post(`http://localhost:8080/request-project-participate?projectId=${projectId}&piId=${piId}`);
}
