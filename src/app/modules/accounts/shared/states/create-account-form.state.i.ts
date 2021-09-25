import { IUser } from 'src/app/modules/users/shared/models/user.i';


export interface ICreateAccountFormState{
    createAccountName: string
    user: IUser,
    isValid: boolean,
}
