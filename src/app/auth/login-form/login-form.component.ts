import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.styl']
})
export class LoginFormComponent implements OnInit {

  credential = {}

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
