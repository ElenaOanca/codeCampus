import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


   /* let token = "";
    let stringUser = localStorage.getItem("user");

    if(stringUser!=null){
      let  user: User = new User(stringUser);
      token=user.token;
    }*/

    const authReq = req.clone({

      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
      },
    });

    //console.log(authReq)
    return next.handle(authReq);
  }
}
