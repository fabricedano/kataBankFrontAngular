import { IUser } from '../models/user.i';

export interface ILoginAction {
    user: IUser;
    accessToken: string;
    message: string;
}