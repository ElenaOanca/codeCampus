import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Corso } from '../../models/corso.model';
import { CorsiService } from '../../service/corsi.service';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {

  idCorso: string;
  corso: Corso;

  isAdmin = false;

  form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    duration: ['', Validators.required],
    price: ['', Validators.required],
    category: ['', Validators.required],
    img:['', Validators.required]
  });

  constructor(public route: ActivatedRoute,
              private router: Router,
              private service: CorsiService,
              private fb: FormBuilder){

    route.params.subscribe(params=>{
      this.idCorso = params['id'];
      if(this.idCorso!=='0'){
        this.service.getCorsoById(this.idCorso).subscribe(corso=>{
          this.corso = corso;
          console.log(corso)
          //aggiungiamo i dati al form
          this.form?.get("name")?.setValue(corso?.name);
          this.form?.get("description")?.setValue(corso?.description);
          this.form?.get("duration")?.setValue(corso?.duration.toString());
          this.form?.get("price")?.setValue(corso?.price.toString());
          this.form?.get("category")?.setValue(corso?.category);
          this.form?.get("img")?.setValue(corso?.img);
        })
      }
    })

      localStorage.getItem("isAdmin") != null ? this.isAdmin = true : this.isAdmin = false;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    let stringUser = localStorage.getItem("user");
    if(stringUser!=null){
      let  user: User = new User(stringUser);
      user.role == "ROLE_ADMIN" ? this.isAdmin = true : this.isAdmin = false;
    }

  }

  add(){
    let row = this.form.getRawValue()
    console.log(row.name)
    //this.service.addCorso();
    let body = {
      name: row.name,
      description:row.description,
      duration: row.duration,
      price: row.price,
      category: row.category,
      img: row.img
      }

      this.service.addCorso(body).subscribe(
        res=>{
          this.router.navigateByUrl('/admin-dashboard')
          console.log("AGGIUNTO ")
        }
      );
  }

  edit(){
    let row = this.form.getRawValue()
    console.log(row.name)
    //this.service.addCorso();
    let body = {
      id: this.idCorso,
      name: row.name,
      description:row.description,
      duration: row.duration,
      price: row.price,
      category: row.category,
      img: row.img
      }

      this.service.editCorso(body).subscribe(
        res=>{
          this.router.navigateByUrl('/admin-dashboard')
          console.log("MODIFICATO ")
        }
      );
  }

}
