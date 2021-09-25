import { IAccount } from '../models/account.i';

export interface ICreateOperationAction {
    amount: number;
    account: IAccount;
    message: string;
}