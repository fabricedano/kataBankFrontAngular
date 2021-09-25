import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { getCurrentUserSelector } from 'src/app/modules/shared/selectors/users.selector';
import { filter, takeWhile, map, tap, mergeMap } from 'rxjs/operators';
import { IAccount } from '../../shared/models/account.i';
import { IAccountsListState } from '../../shared/states/accounts-list.state.i';
import { filteredAccountsSelector } from '../../shared/selectors/accounts-list.selector';
import { errorMessageSelector, hasSuccessCreatingOperationSelector, lastCreatingOperationAccountIdSelector } from '../../shared/selectors/create-operation.selector';


@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit , OnDestroy{
 
  form: FormGroup;
  accounts$: Observable<IAccount[]> = new Observable();
  componentIsActive = true;
  newSolde$: BehaviorSubject<number> = new BehaviorSubject(null);
  balance$: BehaviorSubject<string> = new BehaviorSubject('');
  successCreateOperation$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public actions : any = [
    'Withdraw',
    'Deposit'
  ];

  errorMessage$: Observable<string> = new Observable();


  public selectedAction = this.actions[0];
  
  constructor(private store: Store<IAccountsListState>) {
    this.form = new FormGroup({
      account: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000)]),
    })
   }

  ngOnInit(): void {
    this.resetMessage();
    this.accounts$ = this.store.pipe(select(filteredAccountsSelector), takeWhile(() => this.componentIsActive));
    this.errorMessage$ = this.store.pipe(select(errorMessageSelector), takeWhile(() => this.componentIsActive));
    this.store.pipe(select(hasSuccessCreatingOperationSelector), tap((success) => {
      if(success){
        const newSolde = Number(this.form.get('amount').value) + this.form.get('account').value.solde;
        this.newSolde$.next(newSolde);
        this.selectedAction == 'Withdraw' ? this.balance$.next(`- ${this.form.get('amount').value}`) : this.balance$.next(`+ ${this.form.get('amount').value}`);
        this.successCreateOperation$.next(true);
        this.store.dispatch({type: 'RESET_MESSAGE'});
      }
    }, takeWhile(() => this.componentIsActive 
    ))).subscribe();

    this.store.pipe(select(lastCreatingOperationAccountIdSelector), filter(id => !!id), mergeMap(
      id => this.accounts$.pipe(map(accounts => {
        const foundIndex = accounts.findIndex(account => account.id === id);
        accounts[foundIndex].solde =  accounts[foundIndex].solde + Number(this.form.get('amount').value);
        return accounts;
      }))
      ), takeWhile(() => this.componentIsActive)
    ).subscribe();

    this.store.pipe(select(getCurrentUserSelector),filter(user => !!user),takeWhile(() => this.componentIsActive)).subscribe(user => {
      this.store.dispatch({type: 'LOAD_ACCOUNTS', payload: user.id});
    })
  }

  public updateSelectedAction(action: string) : void{
    this.selectedAction = action;
  }

  public updateSolde(value): void{
    let amount = value.amount;
    if(this.selectedAction == 'Withdraw'){
      amount = Number(`-${amount}`);
    }
    this.store.dispatch({type: 'VALID_CREATE_OPERATION_FORM', payload: {
      accountId: value.account.id,
      amount: amount
    }});
  }


  public resetMessage(): void{
    this.store.dispatch({type: 'RESET_MESSAGE'});
  }
  ngOnDestroy(): void {
    this.componentIsActive = false;
  }
}
