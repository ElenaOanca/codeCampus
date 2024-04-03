import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  BASE_URL = 'http://localhost:8080';
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    let stringUser = localStorage.getItem('user');
    if (stringUser != null) {
      this.user.next(JSON.parse(stringUser) as User);
    }
  }

  registerUser(user: User): Observable<any> {
    user.role = 'ROLE_USER';

    return this.http.post(this.BASE_URL+'/auth/register', user).pipe(
      map((res) => {
        this.user.next(new User(JSON.stringify(res)));
      })
    );
  }

  login(username: string, password: string): Observable<User> {
    const body = JSON.stringify({ username, password });

    return this.http.post<User>(this.BASE_URL+'/auth/login', body).pipe(
      map((res) => {
        this.user.next(new User(JSON.stringify(res)));
        localStorage.setItem('user', JSON.stringify(res));
        return new User(JSON.stringify(res));
      })
    );
  }


  logout() {
    localStorage.removeItem('user');
    this.user.next(null);
  }



  editUserInfo(userEdit:User): Observable<User>{
    userEdit.token='';
    console.log('edit',this.user?.getValue())
    let headers = {'Token': 'Bearer '+this.user?.getValue()?.token}
    return this.http.put<User>(this.BASE_URL+'/auth/edit', userEdit, {headers}).pipe(
      map((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.user.next(new User(JSON.stringify(res)));
        return res;
      })
    )
  }



}
