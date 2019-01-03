import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/shared/auth.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // const ex = this.authService.isAuthenticated().pipe<boolean>(map(auth => {
    //   console.log('asdsad');
    //   return true
    // }))
    // ex.subscribe(e => {console.log(e);
    // });
  }

}
