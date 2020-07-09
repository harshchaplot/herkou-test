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
export class StaffService {
  config:any;
  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getSubjects(branch:any): Observable<any> {
    this.config = {
      params: {
         'branch':branch
      }
    }
    return this.http.get<Object[]>(baseURL + 'staff/subject',this.config)
        .pipe(catchError(this.processHTTPMsgService.handleError))
        .pipe(delay(2000));
  }

  questionPost(creaditial:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>(baseURL + 'staff/question' , creaditial , httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError))
        .pipe(delay(2000));
  }
  
}
