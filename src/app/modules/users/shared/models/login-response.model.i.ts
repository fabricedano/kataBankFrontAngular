import { IUser } from './user.i';

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}