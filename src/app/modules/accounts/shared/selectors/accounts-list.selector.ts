import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAccountsListState } from '../states/accounts-list.state.i';

export const getAccountsListFeatureState = createFeatureSelector<IAccountsListState>('accountsList');

// Account List
export const hasSuccessLoadingAccounts = createSelector(
    getAccountsListFeatureState,
    state => state.hasSuccessLoadingAccounts
);

export const hasLoadingAccountsErrorSelector = createSelector(
    getAccountsListFeatureState,
    state => state.hasLoadingError
);

export const filteredAccountsSelector = createSelector(
    getAccountsListFeatureState,
    state => state.filteredAccounts
);

export const accountsSelector = createSelector(
    getAccountsListFeatureState,
    state => state.accounts
);

