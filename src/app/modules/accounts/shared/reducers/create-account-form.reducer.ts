import { ICreateAccountFormAction } from '../actions/create-account-form.action.i';
import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';
import { ICreateAccountFormState } from '../states/create-account-form.state.i';

const initialState : ICreateAccountFormState = {
    createAccountName: '',
    user: null,
    isValid: false
}

export function CreateAccountFormReducer (state : ICreateAccountFormState = initialState, action : IBaseAction<ICreateAccountFormAction>) : ICreateAccountFormState {
    switch(action.type){
        case 'VALID_CREATE_ACCOUNT_FORM': 
        return {
            ...state,
                createAccountName: action.payload.accountName,
                user :  action.payload.user,
                isValid: true
        }

        case 'INVALID_CREATE_ACCOUNT_FORM': 
        return {
            ...state,
            isValid: false
        }
        default: 
        return state;
    }
}
