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
export class HomeService {

  constructor(private http:HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getExam(branch:any,semester:any) : Observable<any> {
    console.log(branch);
    var config = {
      params: {
         branch:branch,
         semester:semester
      }
    }
    return this.http.get<any>(baseURL + 'admin/examall' , config)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  NotifyExam(config): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>(baseURL + 'test/notify' , config , httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError))
        // .pipe(delay(2000));
  }
}
