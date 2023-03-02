import axios, {AxiosResponse} from "axios";
import {Review} from "../../Interface/User";
import {FormComponent} from "../ProjectCreatePage";

interface ReviewQuery{
    reviewerId: number;
    projectId: number;
    dataNumber: number;
}

export const getReview: (query: ReviewQuery)=>Promise<AxiosResponse<Review,any>> = (query: ReviewQuery) => {
    return axios.get<Review>(`http://localhost:8080/reviewData?reviewerId=${query.reviewerId}&projectId=${query.projectId}&dataId=${query.dataNumber}`);
}

export const getReviewForm: (reviewerId: number,projectId: number)=>Promise<AxiosResponse<FormComponent,any>> = (reviewerId: number,projectId: number) => {
    return axios.get<FormComponent>(`http://localhost:8080/reviewForm?reviewerId=${reviewerId}&projectId=${projectId}`);
}

export const setReview: (review: Review)=>Promise<AxiosResponse<any,any>> = (review: Review) => {
    return axios.post(`http://localhost:8080/reviewData`, review);
}




