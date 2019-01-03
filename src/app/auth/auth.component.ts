import { Component, OnInit } from '@angular/core';
import { LoginForm } from './shared/login-form.model';
import { AuthService } from './shared/auth.service';
import { LoginSuccess } from './auth.actions'
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.styl']
})
export class AuthComponent implements OnInit {

  constructor(private store:Store<any>, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(credential: LoginForm) {    
    this.authService.login(credential).pipe(
      map(data => {
        console.log(1);
        this.store.dispatch(new LoginSuccess(data))
        return data
      }))
      .subscribe(data => {
        this.router.navigate([''])
      })

  }

}
