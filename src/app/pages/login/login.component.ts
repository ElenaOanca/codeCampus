import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
loginForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
});
  constructor(private authService: AuthService, private router: Router, ) { }

  ngOnInit() {

  }

  login() {
    console.log(this.loginForm)
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if(!email || !password) {
      console.error('Email e password sono obbligatorie');
      return;
    }
    this.authService.login(email, password)
      .subscribe(
        response => {
          console.log('Accesso effettuato:', response);
          //this.headerComp.ngOnInit();
          this.router.navigateByUrl('/user-profile', {state:{user: response}});

          // Puoi gestire la risposta qui
        },
        error => {
          console.error('Errore durante il login:', error);
          // Puoi gestire gli errori qui
        }
      );


  }
}
