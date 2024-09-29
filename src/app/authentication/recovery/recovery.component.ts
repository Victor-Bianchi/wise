import { Component } from '@angular/core';
import { IRecovery } from '../../../interfaces/IRecovery';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
})
export class RecoveryComponent {
  model: IRecovery = {
    email: ''
  };

  sendEmail() {
    console.log("sendEmail");
  }
}
