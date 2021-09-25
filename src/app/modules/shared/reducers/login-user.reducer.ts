import { ILoginUserState } from '../states/login-user.state.i';
import { IBaseAction } from '../actions/base-action.i';
import { ILoginAction } from '../../users/shared/actions/login.action.i';

const initialState : ILoginUserState = {
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    hasError: false,
    token: localStorage.getItem('accessToken'),
    isLogged: JSON.parse(localStorage.getItem('currentUser'))? true : false,
    errorMessage: {
        message: ''
    }
}

export function LoginUserReducer (state : ILoginUserState = initialState, action: IBaseAction<ILoginAction>) : ILoginUserState {
    switch(action.type){
        case 'LOGOUT_USER': 
        return {
            ...state,
            token: null,
            isLogged: false,
            currentUser: null
        }
        case 'SUCCESSFULLY_LOGIN_USER':
    
        const res =  {
            ...state,
            isLogged: true,
            currentUser: action.payload.user,
            token: action.payload.accessToken
        }
        return res;

        case 'FAILED_LOGIN_USER':
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