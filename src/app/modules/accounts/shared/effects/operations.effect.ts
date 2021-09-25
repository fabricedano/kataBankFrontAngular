import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { OperationsService } from '../services/operations.service';
import { ICreateOperationFormAction } from '../actions/create-operation-form.action.i';
import { IOperationsListAction } from '../actions/operations-list.action';
import { IBaseAction } from 'src/app/modules/shared/actions/base-action.i';

@Injectable()
export class OperationsEffect {

    constructor(
        private actions$: Actions,
        private operationsService: OperationsService,
      ) {}

      createOperation$ = createEffect(() => this.actions$.pipe(
        ofType('VALID_CREATE_OPERATION_FORM'),
        mergeMap((data : IBaseAction<ICreateOperationFormAction>) => {
          return this.operationsService.createOperation({accountId: data.payload.accountId, amount: data.payload.amount})}))
          .pipe(
            map(response => response.data? ({ type: 'SUCCESSFFULLY_CREATE_OPERATION', payload: response.data }) : ({ type: 'FAILED_CREATE_OPERATION', payload: response.error })  ),
            catchError(() => of(({ type: 'FAILED_CREATE_OPERATION'})))
          )
      );

      loadOperations$ = createEffect(() => this.actions$.pipe(
        ofType('LOAD_OPERATIONS'),
        mergeMap((action : IBaseAction<IOperationsListAction>) => this.operationsService.getOperationByAccountId(action.payload.accountId, action.payload.startDate, action.payload.endDate, action.payload.localDate)
          .pipe(
            map(response => ({ type: 'SUCCESSFFULLY_LOAD_OPERATIONS', payload: { operations : response.data }})),
            catchError(() => of(({ type: 'FAILED_LOAD_OPERATIONS'})))
          ))
        )
      );
}