
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService{

  constructor(private http: HttpClient) { }

  // getRoles(): Observable<string[]> {

  //   return this.http.get<string[]>('your-backend-url/roles');
  // }
}
