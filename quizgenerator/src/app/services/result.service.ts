import { Injectable } from '@angular/core';
import { login,returnlogin } from '../shared/login';

import { catchError, delay } from 'rxjs/operators';

import { Observable, of } from'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getUser(): Observable<any> {
    return this.http.get<any>(baseURL + 'users/byId')
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getAttempts(subject:any,id:any) : Observable<any> {
    var config = {
      params: {
        id:id,
        subject:subject
      }
    }
    return this.http.get<any>(baseURL + 'test/attempt',config)
      .pipe(catchError(this.processHTTPMsgService.handleError))
  }
}
