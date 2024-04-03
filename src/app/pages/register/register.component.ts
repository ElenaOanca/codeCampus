import { Component } from '@angular/core';

import { AuthService } from '../../service/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private authSvc: AuthService, private router: Router){//importo il service per usare i suoi metodi

  }

  onSubmit(arg0: User) {
    console.log(arg0);
    this.authSvc.registerUser(arg0)
    .subscribe(
      response => {
        console.log('Accesso effettuato:', response);
        // Puoi gestire la risposta qui
        this.router.navigateByUrl('/user-profile', {state:{user: response}});
      },
      error => {
        console.error('Errore durante il login:', error);
        // Puoi gestire gli errori qui
      }
    );
  }


}
