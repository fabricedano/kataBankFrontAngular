import { IUser } from 'src/app/modules/users/shared/models/user.i';

export interface IAccount {
    id : number;
    name: string;
    solde: number;
    user: IUser;
}