import { ApiError } from 'src/app/modules/shared/models/api-error.i';

export interface ISignUpUserState {
    hasError: boolean,
    errorMessage: ApiError;
    hasSuccessSignUp: boolean;
}