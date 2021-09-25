import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountsService } from '../services/accounts.service';
import { ICreateAccountFormAction } from '../actions/create-account-form.action.i';
import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';

@Injectable()
export class AccountsEffect {

    constructor(
        private actions$: Actions,
        private accountsService: AccountsService,
      ) {}

      createAccountForm$ = createEffect(() => this.actions$.pipe(
        ofType('VALID_CREATE_ACCOUNT_FORM'),
        mergeMap((data : IBaseAction<ICreateAccountFormAction>) => 
           this.accountsService.createAccount({name: data.payload.accountName, user: data.payload.user})
          .pipe(
            map(response => ({ type: 'SUCCESSFFULLY_CREATE_ACCOUNT', payload: {account : response.data }})),
            catchError(() => of(({ type: 'FAILED_CREATE_ACCOUNT'})))
          ))
        )
      );
    
      loadAccounts$ = createEffect(() => this.actions$.pipe(
        ofType('LOAD_ACCOUNTS'),
        mergeMap((action : any) => this.accountsService.loadAccounts(action.payload)
          .pipe(
            map(response => ({ type: 'SUCCESSFFULLY_LOAD_ACCOUNTS', payload: { accounts : response.data }})),
            catchError(() => of(({ type: 'FAILED_LOAD_ACCOUNTS'})))
          ))
        )
      );
}