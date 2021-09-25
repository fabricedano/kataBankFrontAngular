import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';
import { IAccountsListState } from '../states/accounts-list.state.i';
import { IAccountsListAction } from '../actions/accounts-list.action.i';

export const initialState : IAccountsListState = {
    accounts: [],
    accountsItemsCount: 0,
    hasLoadingError: false,
    hasSuccessLoadingAccounts: false,
    filteredAccounts: [],
    filteredAccountsItemsCount: 0,
    serachPattern: '',
}

export function AccountsListReducer(state : IAccountsListState = initialState, action : IBaseAction<IAccountsListAction>) : IAccountsListState{
    switch(action.type){
        case 'LOAD_ACCOUNTS': 
        return {
            ...state,
        }
        case 'SUCCESSFFULLY_LOAD_ACCOUNTS': 
        return {
            ...state,
            accounts: action.payload.accounts,
            filteredAccounts: action.payload.accounts,
            accountsItemsCount: action.payload.accounts.length,
            filteredAccountsItemsCount: action.payload.accounts.length,
            hasSuccessLoadingAccounts: true
        }

        case 'FAILED_LOAD_ACCOUNTS': 
        return {
            ...state,
            hasLoadingError: true
        }

        case 'FILTERED_ACCOUNTS': 
        return {
            ...state,
            filteredAccounts: state.accounts.filter(p => p.name.includes(action.payload.serachPattern))
        }
        default:
        return state;
    }
}