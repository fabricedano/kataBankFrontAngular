import { IUser } from 'src/app/modules/users/shared/models/user.i';

export interface ICreateAccountFormAction{
    accountName: string;
    user: IUser;
}