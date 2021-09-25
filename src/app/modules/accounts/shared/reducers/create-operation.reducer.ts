import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';
import { ICreateOperationState } from '../states/create-operation.state.i';
import { ICreateOperationAction } from '../actions/create-operation.action.i';

const initialState : ICreateOperationState = {
    hasSuccessCreateOperation: false,
    hasCreateOperationError: false,
    accountId: null,
    errorMessage : {
        message: ''
    }
}

export function CreateOperationReducer(state : ICreateOperationState = initialState, action : IBaseAction<ICreateOperationAction>) : ICreateOperationState{
    switch(action.type){
        case 'SUCCESSFFULLY_CREATE_OPERATION': 
        return {
            accountId: action.payload.account.id,
            hasSuccessCreateOperation: true,
            hasCreateOperationError: false,
            errorMessage: {
                message: ''
            }
        }
        case 'FAILED_CREATE_OPERATION': 
        return {
           ...state,
           hasCreateOperationError: true,
           hasSuccessCreateOperation: false,
           errorMessage: {
               message: action.payload.message
           }
        }
        case 'RESET_MESSAGE': 
        return {
            accountId: null,
            hasSuccessCreateOperation: false,
            hasCreateOperationError: false,
            errorMessage: {
                message: ''
            }
        }
        default:
        return state;
    }
}
