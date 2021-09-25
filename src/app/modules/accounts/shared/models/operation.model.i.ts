import { IAccount } from './account.i';

export interface IOperation {
    id: number;
    type: string;
    amount: number;
    date: Date;
    account: IAccount;
}
