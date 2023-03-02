import axios, {AxiosResponse} from 'axios';
import {LoginForm, Role, User} from "../../Interface/User";


export const login: (data: LoginForm)=>Promise<AxiosResponse<User,any>> = (data: LoginForm) => {
    //TODO: Implement login API
}
