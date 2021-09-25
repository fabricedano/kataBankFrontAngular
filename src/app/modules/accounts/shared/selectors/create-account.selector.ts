import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICreateAccountState } from '../states/create-account.state.i';

export const getCreateAccountFeatureState = createFeatureSelector<ICreateAccountState>('createAccount');

export const hasSuccessCreatingAccountSelector = createSelector(
    getCreateAccountFeatureState,
    state => state.hasSuccessCreatingAccount
);

export const hasCreateAccountErrorSelector = createSelector(
    getCreateAccountFeatureState,
    state => state.hasCreateAccountError
);


export const lastCreateAccountSelector = createSelector(
    getCreateAccountFeatureState,
    state => state.accountCreated
);


