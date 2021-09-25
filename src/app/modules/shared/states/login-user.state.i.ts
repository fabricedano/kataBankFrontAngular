import { IUser } from 'src/app/modules/users/shared/models/user.i';
import { ApiError } from '../models/api-error.i';

export interface ILoginUserState {
    isLogged: boolean,
    currentUser: IUser,
    hasError: boolean,
    token: string,
    errorMessage: ApiError;
}