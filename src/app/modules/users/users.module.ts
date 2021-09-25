import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './user-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpFormReducer } from './shared/reducers/sign-up-form.reducer';
import { StoreModule } from '@ngrx/store';
import { SignUpUserReducer } from './shared/reducers/sign-up-user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SignUpEffect } from './shared/effects/signup.effect';
import { LoginEffect } from './shared/effects/login.effect';
import { LoginFormReducer } from '../shared/reducers/login-form.reducer';


@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UsersRoutingModule,
    StoreModule.forFeature('signUpForm', SignUpFormReducer),
    StoreModule.forFeature('signUpUser', SignUpUserReducer),
    StoreModule.forFeature('loginForm', LoginFormReducer),
    EffectsModule.forFeature([LoginEffect]),
    EffectsModule.forFeature([SignUpEffect]),
  ],
  providers: []
})
export class UsersModule { }
