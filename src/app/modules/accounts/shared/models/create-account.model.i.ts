import { IUser } from 'src/app/modules/users/shared/models/user.i';

export interface CreateAccount {
    name: string,
    user: IUser
}