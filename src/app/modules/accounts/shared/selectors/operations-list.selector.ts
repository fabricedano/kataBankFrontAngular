import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IOperationListState } from '../states/operations-list.state.i';

export const getLoadOperationsFeatureState = createFeatureSelector<IOperationListState>('operationsList');


export const getOperationsListSelector = createSelector(
    getLoadOperationsFeatureState,
    state => state.operations
);

export const hasSuccessLoadOperationsSelector = createSelector(
    getLoadOperationsFeatureState,
    state => state.hasSuccessLoadOperations
);

export const hasLoadOperationsErrorSelector = createSelector(
    getLoadOperationsFeatureState,
    state => state.hasLoadOperationsError
);
