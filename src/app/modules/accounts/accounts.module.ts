import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsService } from './shared/services/accounts.service';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountDialogComponent } from './components/create-account-dialog/create-account-dialog.component';
import { AccountsEffect } from './shared/effects/accounts.effect';
import { OperationsComponent } from './components/operations/operations.component';
import { CreateAccountFormReducer } from './shared/reducers/create-account-form.reducer';
import { CreateAccountReducer } from './shared/reducers/create-account.reducer';
import { CreateOperationFormReducer } from './shared/reducers/create-operation-form.reducer';
import { CreateOperationReducer } from './shared/reducers/create-operation.reducer';
import { AccountsListReducer } from './shared/reducers/accounts-list.reducer';
import { OperationsListReducer } from './shared/reducers/operations-list.reducer';
import { OperationsEffect } from './shared/effects/operations.effect';
import { OperationsService } from './shared/services/operations.service';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent, CreateAccountDialogComponent, ManageAccountComponent, OperationsComponent],
  imports: [
    CommonModule, 
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    StoreModule.forFeature('accountsList', AccountsListReducer),
    StoreModule.forFeature('createAccountForm', CreateAccountFormReducer),
    StoreModule.forFeature('createAccount', CreateAccountReducer),
    StoreModule.forFeature('operationsList', OperationsListReducer),
    StoreModule.forFeature('createOperationForm', CreateOperationFormReducer),
    StoreModule.forFeature('createOperation', CreateOperationReducer),
    EffectsModule.forFeature([AccountsEffect, OperationsEffect]),
    AccountsRoutingModule
  ], 
  providers: [AccountsService, OperationsService],
  entryComponents: [CreateAccountDialogComponent]
})
export class AccountsModule { }
