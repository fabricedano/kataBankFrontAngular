import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { hasSignUpErrorMessageSelector, hasSuccessSignUpSelector } from '../../shared/selectors/signup.selector';
import { ISignUpFormState } from '../../shared/states/sign-up-form.state.i';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
 
  form: FormGroup;
  errorMessage$: Observable<string> = new Observable();
  successCreateAccount$ : Observable<boolean> = new Observable();
  componentIsActive = true;

  constructor(private store: Store<ISignUpFormState>) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      address: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.errorMessage$ = this.store.pipe(select(hasSignUpErrorMessageSelector), takeWhile(() => this.componentIsActive));
    this.successCreateAccount$ = this.store.pipe(select(hasSuccessSignUpSelector), takeWhile(() => this.componentIsActive));
  }

  signUpUser(value){
    this.store.dispatch({type: 'VALID_SIGNUP_FORM', payload: value});
  }

  ngOnDestroy(): void {
    this.componentIsActive = false;
  }
}
