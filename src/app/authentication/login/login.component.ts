import { Component } from '@angular/core';
import { ILogin } from '../../../interfaces/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  model: ILogin = {
    email: '',
    password: ''
  };

  constructor() {}

  login() {
    console.log(this.model);
  }
}
