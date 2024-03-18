import { Component } from '@angular/core';

import { RoleService } from '../../role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  onSubmit(arg0: any) {
    console.log(arg0);
  }

}
