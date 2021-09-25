import { ISignUpUserState } from '../states/sign-up-user.state.i';
import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';
import { ISignUpAction } from '../actions/signup.action.i';

const initialState : ISignUpUserState = {
   hasError: false,
   hasSuccessSignUp: false,
    errorMessage: {
        message: ''
    }
}

export function SignUpUserReducer (state : ISignUpUserState = initialState, action: IBaseAction<ISignUpAction>) : ISignUpUserState {
    switch(action.type){
        case 'SUCCESSFULLY_SIGNUP_USER':
        return {
            ...state,
            hasSuccessSignUp : true
        }

        case 'FAILED_SIGNUP_USER':
            return {
                ...state,
                errorMessage: {
                    message: action.payload.message
                }
            }
    
        default: 
            return state;
    }
}