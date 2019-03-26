import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoginForm } from '../shared/login-form.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.styl']
})
export class LoginFormComponent implements OnInit {

  credential:LoginForm = new LoginForm()

  @Input()
  private isLoading: Boolean = false;

  @Input()
  errMsg: String = "";

  @Output()
  login = new EventEmitter<LoginForm>()

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.login.emit(this.credential);
  }

}
