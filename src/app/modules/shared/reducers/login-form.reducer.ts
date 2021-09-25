import { ILoginFormState } from '../states/login-form.state.i';

const initialState : ILoginFormState = {
    email: '',
    password: '',
    isValid: true
}

export function LoginFormReducer (state : ILoginFormState = initialState, action){
    switch(action.type){
        case 'VALID_LOGIN_FORM': 
        return {
            ...state,
            isValid: true 
        }

        case 'INVALID_LOGIN_FORM': 
        return {
            ...state,
            isValid: false
        }
        default: 
        return state;
    }
}