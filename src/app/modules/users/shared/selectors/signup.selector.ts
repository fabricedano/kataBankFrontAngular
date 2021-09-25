import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISignUpUserState } from '../states/sign-up-user.state.i';

export const getSignUpUserSelector = createFeatureSelector<ISignUpUserState>('signUpUser');


export const hasSuccessSignUpSelector = createSelector(
    getSignUpUserSelector,
    state => state.hasSuccessSignUp
);

export const hasSignUpErrorMessageSelector = createSelector(
    getSignUpUserSelector,
    state => state.errorMessage.message
);