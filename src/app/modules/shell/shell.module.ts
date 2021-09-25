import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ShellComponent } from './shell.component';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { AuthGuard } from './shared/guards/auth.guard';
import { AccountsListReducer } from '../accounts/shared/reducers/accounts-list.reducer';

@NgModule({
  declarations: [HeaderComponent, ShellComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature( 'accountList', AccountsListReducer),
    ShellRoutingModule,
  ],
  providers : [AuthGuard]
})
export class ShellModule { }
