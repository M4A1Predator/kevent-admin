import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogoutSuccess } from 'src/app/auth/auth.actions'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new LogoutSuccess())
    this.router.navigate(['/login'])
  }

}
