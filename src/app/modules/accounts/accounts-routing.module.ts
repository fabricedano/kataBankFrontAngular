import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { OperationsComponent } from './components/operations/operations.component';

const routes: Routes = [
    {path: 'accounts', component: HomeComponent},
    {path: 'manage', component: ManageAccountComponent},
    {path: 'accounts/:id/operations', component: OperationsComponent} 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule {
}
