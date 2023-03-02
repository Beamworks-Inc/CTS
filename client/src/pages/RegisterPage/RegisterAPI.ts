import {RegisterForm, Role, User} from "../../Interface/User";
import {AxiosResponse} from "axios";

export const register: (data: RegisterForm)=>Promise<AxiosResponse<User,any>> = (data: RegisterForm) => {
    //TODO: Implement register API
}
