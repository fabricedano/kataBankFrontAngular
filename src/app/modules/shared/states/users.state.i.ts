import { ILoginUserState } from './login-user.state.i';
import { ILoginFormState } from './login-form.state.i';

export interface IUsersState {
    loginUser : ILoginUserState;
    loginForm: ILoginFormState;
}