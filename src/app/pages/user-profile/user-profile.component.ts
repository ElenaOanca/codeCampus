import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  user: User;
  form: FormGroup = this.fb.group({

    name:['', Validators.required],
    surname:['', Validators.required],
    address:[''],
    email:['']
  })

  constructor(private router: Router, private fb: FormBuilder, private authSvc: AuthService){

    /*let state = this.router.getCurrentNavigation()?.extras.state;
    this.user = state?.['user'];

    if(this.user==null){

        let stringUser = localStorage.getItem("user");
        if(stringUser!=null){
          this.user = new User( stringUser);

        }
    }
    console.log('user profile',this.user)*/
  }

  ngOnInit(): void {
    this.authSvc.user.subscribe(res=>{
      this.user=res as User;
    })
  }

  save(){
    let user = {
      id: this.authSvc.user.getValue()?.id,
      firstName: this.form.getRawValue().name,
      lastName: this.form.getRawValue().surname,
      password: this.authSvc.user.getValue()?.password,
      role: this.authSvc.user.getValue()?.role,
      token: null,
      username: this.authSvc.user.getValue()?.username,
      email: this.form.getRawValue().email,
      address: this.form.getRawValue().address,
    }

    let stringUser = JSON.stringify(user);

    this.authSvc.editUserInfo(new User(stringUser)).subscribe(res=>   this.ngOnInit());

  }

}
