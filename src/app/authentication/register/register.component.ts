import { Component } from '@angular/core';
import { IRegister } from '../../../interfaces/IRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  model: IRegister = {
    name: '',
    lastName: '',
    email: '',
    password: ''
  };
}
