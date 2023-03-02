import {RegisterForm, User} from "../../Interface/User";
import axios, {AxiosResponse} from "axios";

export const register: (data: RegisterForm)=>Promise<AxiosResponse<User,any>> = (data: RegisterForm) => {
    //TODO: Implement register API
    return axios.post<User>("http://localhost:8080/register", data);
}
