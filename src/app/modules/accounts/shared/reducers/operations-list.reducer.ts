import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';
import { IOperationListState } from '../states/operations-list.state.i';
import { IOperationsListAction } from '../actions/operations-list.action';

const initialState : IOperationListState = {
    errorMessage: {
        message: ''
    },
    hasSuccessLoadOperations: false,
    hasLoadOperationsError: false,
    operations: []
}

export function OperationsListReducer(state : IOperationListState = initialState, action : IBaseAction<IOperationsListAction>) : IOperationListState{
    switch(action.type){
        case 'SUCCESSFFULLY_LOAD_OPERATIONS': 
        return {
            ...state,
            hasSuccessLoadOperations: true,
            operations: action.payload.operations
        }
        default:
        return state;
    }
}
