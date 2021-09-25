import { IAccount } from '../models/account.i';

export interface IAccountsListAction {
    accounts: IAccount[],
    serachPattern: ''
}
