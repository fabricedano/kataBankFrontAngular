import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from 'src/app/modules/users/shared/services/user.service';
import { IValidSignUpFormAction } from '../actions/valid-signup-form.action.i';
import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';

@Injectable()
export class SignUpEffect {
      constructor(
        private actions$: Actions,
        private userService: UserService,
      ) {}

      signUp$ = createEffect(() => this.actions$.pipe(
        ofType('VALID_SIGNUP_FORM'),
        mergeMap((data : IBaseAction<IValidSignUpFormAction>) => {
          return this.userService.signUpUser(data.payload.name, data.payload.email, data.payload.address, data.payload.password)}))
          .pipe(
            map(response => response.data? ({ type: 'SUCCESSFULLY_SIGNUP_USER', payload: response.data }) :
            ({ type: 'FAILED_SIGNUP_USER', payload: response.error })),
            catchError(() => of(({ type: 'FAILED_SIGNUP_USER'})))
          )
      );
}