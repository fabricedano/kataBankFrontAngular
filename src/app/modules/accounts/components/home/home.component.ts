import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { filter, debounceTime, switchMap, map, mergeMap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateAccountDialogComponent } from '../create-account-dialog/create-account-dialog.component';
import { getCurrentUserSelector } from 'src/app/modules/shared/selectors/users.selector';
import { Router } from '@angular/router';
import { IAccount } from '../../shared/models/account.i';
import { IAccountsListState } from '../../shared/states/accounts-list.state.i';
import { filteredAccountsSelector } from '../../shared/selectors/accounts-list.selector';
import { ICreateAccountState } from '../../shared/states/create-account.state.i';
import { lastCreateAccountSelector } from '../../shared/selectors/create-account.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  accounts$: Observable<IAccount[]> = new Observable();
  gridCols : BehaviorSubject<number> = new BehaviorSubject<number>(1);

  form: FormGroup;
  constructor(private store: Store<IAccountsListState | ICreateAccountState>,
    private store2: Store<ICreateAccountState>,
    public dialog: MatDialog, private router: Router) {
    this.form = new FormGroup({
      search: new FormControl(''),
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateAccountDialogComponent, {
      width: '40%',
      data: {}
    });

    dialogRef.afterClosed().subscribe((accountName : string) => {
        if(accountName){
          this.store.pipe(filter(user => !!user),select(getCurrentUserSelector)).subscribe(user => {
            this.store.dispatch({type: 'VALID_CREATE_ACCOUNT_FORM', payload: {accountName, user}});
          })
        }
    });
  }

  ngOnInit(): void {
    this.form.get('search').valueChanges.pipe(
      debounceTime(300),
      switchMap(pattern => of(this.store.dispatch({type: 'FILTERED_ACCOUNTS', payload: { serachPattern : pattern}})))
    ).subscribe();
    this.accounts$ = this.store.pipe(select(filteredAccountsSelector));
    this.store.pipe(select(getCurrentUserSelector),filter(user => !!user)).subscribe(user => {
      this.store.dispatch({type: 'LOAD_ACCOUNTS', payload: user.id});
    })

    this.store.pipe(select(lastCreateAccountSelector), filter(account => !!account), mergeMap(
      account => this.accounts$.pipe(map(accounts => accounts.push(account)))
      )
    ).subscribe();
  }

  public goToBalance(account: IAccount): void{
    this.router.navigate(['bankaccount', 'accounts', account.id, 'operations']);
  }
}
