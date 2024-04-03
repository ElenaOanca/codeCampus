import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CorsiService } from '../../service/corsi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

isLoggedIn = false;
isAdmin = false;

constructor(private authSvc: AuthService, private router: Router){}

ngOnInit(): void {

 /*let stringUser = localStorage.getItem("user");
 if(stringUser!=null){
  let  user:User = new User( stringUser);
  user.role == "ROLE_ADMIN" ? this.isAdmin = true : this.isAdmin = false;
  this.isLoggedIn = true;
 }else{
  this.isAdmin=false;
  this.isLoggedIn=false;
 }*/

this.authSvc.user.subscribe(value=>{
  console.log('HEADER compoennt',value);
  if(value?.id!=null){
    value.role == "ROLE_ADMIN" ? this.isAdmin = true : this.isAdmin = false;
    this.isLoggedIn=true;
  }else{
    this.isLoggedIn=false;
    this.isAdmin=false;
  }

})


}

  courses = [
    { id:1, category: "Linguaggi di Programmazione", languages: ["Java", "Python", "JavaScript", "C++", "C#", "Ruby", "PHP", "Swift", "Kotlin"] },
    { id:2, category: "Sviluppo Web", languages: ["HTML", "CSS", "JavaScript", "Frameworks come React, Angular, Vue.js"] },
    { id:3, category: "Sviluppo Backend", languages: ["Frameworks come Spring (Java), Django (Python), Express (JavaScript), Ruby on Rails (Ruby), ASP.NET (C#)"] },
    { category: "Basi di Dati", languages: ["SQL", "NoSQL (come MongoDB)"] },
    { category: "Version Control", languages: ["Git"] },
    { category: "Sicurezza Informatica", languages: [] },
    { category: "Test e Debugging", languages: [] },
    { category: "Sviluppo Mobile", languages: ["Swift (iOS)", "Java/Kotlin (Android)"] },
    { category: "Cloud Computing", languages: ["AWS (Amazon Web Services)", "Azure (Microsoft)", "GCP (Google Cloud Platform)"] },
    { category: "Containerization e Orchestration", languages: ["Docker", "Kubernetes"] },
    { category: "DevOps", languages: [] },
    { category: "Machine Learning e Intelligenza Artificiale", languages: ["TensorFlow", "PyTorch"] }
  ];

  logout(){
    this.authSvc.logout();
    this.ngOnInit();
    this.router.navigateByUrl('/')
  }

}
