import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)},
    {path: 'bankaccount', loadChildren: () => import('./modules/shell/shell.module').then(m => m.ShellModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
