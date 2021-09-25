import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILoginFormState } from 'src/app/modules/shared/states/login-form.state.i';

export const getLoginFormSelector = createFeatureSelector<ILoginFormState>('loginForm');


export const isValidFormSelector = createSelector(
    getLoginFormSelector,
    state => state.isValid
);
