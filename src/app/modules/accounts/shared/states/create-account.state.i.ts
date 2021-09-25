import { IAccount } from '../models/account.i';

export interface ICreateAccountState {
    hasSuccessCreatingAccount: boolean;
    hasCreateAccountError: boolean;
    accountCreated: IAccount;
}
