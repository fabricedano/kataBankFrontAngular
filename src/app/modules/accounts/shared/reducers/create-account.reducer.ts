import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';
import { ICreateAccountState } from '../states/create-account.state.i';
import { ICreateAccountAction } from '../actions/create-account.action.i';

const initialState : ICreateAccountState = {
    hasCreateAccountError: false,
    hasSuccessCreatingAccount: false,
    accountCreated: null
}

export function CreateAccountReducer(state : ICreateAccountState = initialState, action : IBaseAction<ICreateAccountAction>) : ICreateAccountState{
    switch(action.type){
        case 'SUCCESSFFULLY_CREATE_ACCOUNT': 
        return {
            ...state,
            hasSuccessCreatingAccount: true,
            accountCreated: action.payload.account
        }
        case 'FAILED_CREATE_ACCOUNT': 
        return {
            ...state,
                hasCreateAccountError: true
        }
        default:
        return state;
    }
}
