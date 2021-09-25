import { IAccount } from '../models/account.i';

export interface IAccountsListState {
    accounts :IAccount[],
    accountsItemsCount: number,
    serachPattern: string,
    filteredAccounts: IAccount[]
    filteredAccountsItemsCount: number,
    hasSuccessLoadingAccounts: boolean;
    hasLoadingError: boolean;
}