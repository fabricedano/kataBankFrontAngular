import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { isSuccessLoginUser, hasLoginErrorMessageSelector } from 'src/app/modules/shared/selectors/users.selector';
import { IUsersState } from 'src/app/modules/shared/states/users.state.i';
import { takeWhile } from 'rxjs/operators';
import { isValidFormSelector } from '../../shared/selectors/login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  form: FormGroup;
  errorMessage$: Observable<string> = new Observable();
  invalidSubmitForm$: Observable<boolean> = new Observable();
  componentIsActive = true;

  constructor(private store: Store<IUsersState>, private router : Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.invalidSubmitForm$ = this.store.pipe(select(isValidFormSelector));
    this.errorMessage$ = this.store.pipe(select(hasLoginErrorMessageSelector), takeWhile(() => this.componentIsActive));

    this.store.pipe(select(isSuccessLoginUser)).subscribe(isLogged => {
      if(isLogged){
        this.router.navigate(['/bankaccount', 'accounts']);
      }
    });
  }

  logUser(value){
    this.store.dispatch({type: 'VALID_LOGIN_FORM', payload: value});
  }

  ngOnDestroy(): void {
    this.componentIsActive = false;
  }
}
