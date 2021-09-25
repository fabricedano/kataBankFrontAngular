import { ISignUpFormState } from '../states/sign-up-form.state.i';

const initialState : ISignUpFormState = {
    name: '',
    email: '',
    address: '',
    password: '',
    isValid: true
}

export function SignUpFormReducer (state : ISignUpFormState = initialState, action){
    switch(action.type){
        case 'VALID_SIGNUP_FORM': 
        return {
            ...state,
            isValid: true 
        }
        case 'INVALID_SIGNUP_FORM': 
        return {
            ...state,
            isValid: false
        }
        default: 
        return state;
    }
}