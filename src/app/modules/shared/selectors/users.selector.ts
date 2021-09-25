import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILoginUserState } from '../states/login-user.state.i';

export const getLoginUserSelector = createFeatureSelector<ILoginUserState>('loginUser');

export const isSuccessLoginUser = createSelector(
    getLoginUserSelector,
    state => state.isLogged
);


export const isLoginErrorSelector = createSelector(
    getLoginUserSelector,
    state => state.hasError
);

export const getCurrentUserSelector = createSelector(
    getLoginUserSelector,
    state => state.currentUser
);


export const hasLoginErrorMessageSelector = createSelector(
    getLoginUserSelector,
    state => state.errorMessage.message
);
