import { Injectable } from '@angular/core';
import { Signup,returnsignup } from '../shared/signup';
// import { Observable } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { Observable, of } from'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  config:any;
  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }


  signupPost(creaditial: Signup): Observable<returnsignup> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<returnsignup>(baseURL + 'users/signup' , creaditial , httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError))
        .pipe(delay(2000));
  }

  signupStaff(creaditial: Signup): Observable<returnsignup> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<returnsignup>(baseURL + 'users/staffsignup' , creaditial , httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError))
        .pipe(delay(2000));
  }


  getusers(): Observable<any> {
    return this.http.get<Object[]>(baseURL + 'users/')
        .pipe(catchError(this.processHTTPMsgService.handleError))
        .pipe(delay(2000));
  }

  out(ip:string,username:string): Observable<any> {
    this.config = {
      params: {
         'ip':ip,
         'username':username
      }
    }
    return this.http.get<any>(baseURL + 'users/logout',this.config)
        .pipe(catchError(this.processHTTPMsgService.handleError))
        .pipe(delay(2000));
  }
}
