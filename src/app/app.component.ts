import { Component } from '@angular/core';
import { AuthService } from './auth/shared/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LogoutSuccess } from './auth/auth.actions';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'k-admin';

  constructor(private authService: AuthService, private router: Router, private store: Store<any>) {
    this.authService.verifyToken().subscribe(() => {}, () => {
      this.store.dispatch(new LogoutSuccess())
      this.router.navigate(["/login"])
    })
  }
}
