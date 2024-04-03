import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { Corso } from '../../models/corso.model';
import { CorsiService } from '../../service/corsi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

user: User;

corsi: Corso[] = [];

constructor(private corsiSvc: CorsiService, private router: Router){
 this.getCorsi();

}


getCorsi(){
  this.corsiSvc.getCorsi().subscribe(res=>{
    this.corsi = res;
    console.log(this.corsi)
  })
}

addCorso(){
  this.router.navigate(['/course-details/'+0]);
  /*this.corsiSvc.addCorso(null).subscribe(corso =>{
    this.getCorsi();
  });*/
}

goToEdit(id: number){
  this.router.navigate(['/course-details/'+id]);
}

delete(id:number){

 /* this.corsiSvc.deleteCorso(id).subscribe(res=>{
    this.getCorsi();
  })*/
}

}
