import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Corso } from '../models/corso.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {

  BASE_URL = "http://localhost:8080"
  //user: BehaviorSubject<User> = new BehaviorSubject<User>(new User(null));


constructor(private http: HttpClient, private authSvc: AuthService) {
 /* let stringUser = localStorage.getItem('user');
  if(stringUser!=null){
    this.user.next(JSON.parse(stringUser) as User);
  }
*/
 }


getCorsi() : Observable<Corso[]>{
//su questo metodo non serve il token perchè puoi vederli da loggato o da non loggato
  return this.http.get<Corso[]>(this.BASE_URL+'/courses').pipe(
    map( (res) => {
      return res.map(corso => new Corso(JSON.stringify(corso)));
  }))
}

getCorsoById(id: string) : Observable<Corso>{
  //su questo metodo non serve il token perchè puoi vederli da loggato o da non loggato
  return this.http.get<Corso>(this.BASE_URL+'/courses/'+id).pipe(
    map( (res) => {
      return new Corso(JSON.stringify(res));
  }))
}


addCorso(body: any) : Observable<Corso>{
let headers = {'Token': 'Bearer '+this.authSvc.user?.getValue()?.token }
  return this.http.post<Corso>(this.BASE_URL+'/admin/courses', body, {headers}).pipe(
    map( (res) => {
      return new Corso(JSON.stringify(res));
  }))
}

editCorso(body: any) :  Observable<string>{
let headers = {'Token': 'Bearer '+this.authSvc.user?.getValue()?.token}

   return this.http.put<string>(this.BASE_URL+'/admin/courses', body,  {headers}).pipe(
    map( (res) => {
      return "Corso modificato";
  }))
}

deleteCorso(id:number): Observable<string>{
  let headers = {'Token': 'Bearer '+this.authSvc.user?.getValue()?.token}

  return this.http.delete(this.BASE_URL+'/admin/courses/'+id, {headers}).pipe(
    map(res=>{
      return 'corso cancellato';
    })
  )
}

}
