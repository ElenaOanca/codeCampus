import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Corso } from '../../models/corso.model';
import { CorsiService } from '../../service/corsi.service';
import { AuthService } from '../../service/auth.service';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  activeIndex = 0; // Indice della card attiva


  corsi: Corso[] = [];

  constructor(protected router: Router, private service: CorsiService, private authService: AuthService){
    //appena arrivo sul component faccio la chiamaat get dei corsi
   service.getCorsi().subscribe(res =>{
      this.corsi=res;
    });
  }

  //metodo chiamato nel click della card
  //usa il router per navigare da un component a un altro
  goToDetail(id?:number){
    this.router.navigate(['/course-details/'+id]);
  }


  ngOnInit() {}



}
