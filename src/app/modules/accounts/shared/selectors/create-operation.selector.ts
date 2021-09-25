import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICreateOperationState } from '../states/create-operation.state.i';

export const getCreateOperationFeatureState = createFeatureSelector<ICreateOperationState>('createOperation');

export const hasSuccessCreatingOperationSelector = createSelector(
    getCreateOperationFeatureState,
    state => state.hasSuccessCreateOperation
);


export const lastCreatingOperationAccountIdSelector = createSelector(
    getCreateOperationFeatureState,
    state => state.accountId
);

export const hasCreateOperationErrorSelector = createSelector(
    getCreateOperationFeatureState,
    state => state.hasCreateOperationError
);


export const errorMessageSelector = createSelector(
    getCreateOperationFeatureState,
    state => state.errorMessage.message
);




