import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/modules/users/shared/services/user.service';
import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';
import { IValidLoginFormAction } from 'src/app/modules/shared/actions/valid-login-form.action.i';
import { ILoginAction } from '../actions/login.action.i';

@Injectable()
export class LoginEffect {
      constructor(
        private actions$: Actions,
        private userService: UserService,
      ) {}

      logUser$ = createEffect(() => this.actions$.pipe(
        ofType('VALID_LOGIN_FORM'),
        mergeMap((data : IBaseAction<IValidLoginFormAction>) => {
          return this.userService.logUser(data.payload.email, data.payload.password)}))
          .pipe(
            map(response => response.data? ({ type: 'SUCCESSFULLY_LOGIN_USER', payload: response.data }) :
            ({ type: 'FAILED_LOGIN_USER', payload: response.error })),
            catchError(() => of(({ type: 'FAILED_LOGIN_USER'})))
          )
      );

      successFullyLogin$ = createEffect(() => this.actions$.pipe(
        ofType('SUCCESSFULLY_LOGIN_USER'), tap((data: IBaseAction<ILoginAction>) => {
          localStorage.setItem('currentUser', JSON.stringify(data.payload.user))
          localStorage.setItem('accessToken', data.payload.accessToken)
        })
        ), {dispatch: false}
      );

      logoutUser$ = createEffect(() => this.actions$.pipe(
        ofType('LOGOUT_USER'), tap(() => {
          localStorage.removeItem('currentUser')
          localStorage.removeItem('accessToken')
        })
        ), {dispatch: false}
      );
}