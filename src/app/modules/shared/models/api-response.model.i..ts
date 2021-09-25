import { ApiError } from './api-error.i';

export interface ApiResponse<T>{
    data: T;
    error: ApiError;
}