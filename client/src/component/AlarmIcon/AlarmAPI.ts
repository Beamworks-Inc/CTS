import axios, {AxiosResponse} from "axios";
import {Alarm} from "../../Interface/User";

/**
 * 내가 받아야 하는 알람들을 받아온다.
 */
export const getAlarms: () => Promise<AxiosResponse<Alarm[], any>> = () => {
    return axios.get<Alarm[]>("http://localhost:8080/alarms");
}
