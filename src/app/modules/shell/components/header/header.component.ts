import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { IUsersState } from 'src/app/modules/shared/states/users.state.i';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<IUsersState>, public router: Router) {}

  ngOnInit(): void {
  }

  logOut(){
    this.store.dispatch({type: 'LOGOUT_USER'});
    this.router.navigate(['/']);
  }
}
