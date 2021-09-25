import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IUsersState } from 'src/app/modules/shared/states/users.state.i';
import { isSuccessLoginUser } from 'src/app/modules/shared/selectors/users.selector';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<IUsersState>, public router: Router) {}
  canActivate(): Observable<boolean> {
   return this.store.pipe(select(isSuccessLoginUser), mergeMap((isLogged) => {
       if(!isLogged){
           this.router.navigate(['/']);
       }
       return of(isLogged)
    }))
  }
}