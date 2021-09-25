import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';
import { ICreateOperationFormState } from '../states/create-operation-form.state.i';
import { ICreateOperationFormAction } from '../actions/create-operation-form.action.i';

const initialState : ICreateOperationFormState = {
    amount : 0,
    accountId: 0,
    isValid: false
}

export function CreateOperationFormReducer (state : ICreateOperationFormState = initialState, action : IBaseAction<ICreateOperationFormAction>) : ICreateOperationFormState {
    switch(action.type){
        case 'VALID_CREATE_OPERATION_FORM': 
        return {
            ...state,
            accountId: action.payload.accountId,
            amount: action.payload.amount,
            isValid: true
        }
        case 'INVALID_CREATE_OPERATION_FORM': 
        return {
            ...state,
            isValid: false
        }
        default: 
        return state;
    }
}


