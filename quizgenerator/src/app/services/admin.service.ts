import { Injectable } from '@angular/core';
import { Exam } from '../shared/admin';

import { catchError, delay } from 'rxjs/operators';

import { Observable, of } from'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  config: any;

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  scheduleExam(exam:Exam): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>(baseURL+ 'admin/',exam,httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError))
    .pipe(delay(2000));
  }

  searchExam(branch:any,sem:any): Observable<any> {
    console.log(branch);
    console.log(sem);
    // console.log(date);
    
    this.config = {
      params: { branch:branch,
                 sem:sem,
                 
             }};
    return this.http.get<Exam>(baseURL+ 'admin/exam',this.config)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getstaff(): Observable<any> {
    return this.http.get<any>(baseURL+ 'admin/getStaff')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  verfied(id:any,update:any) : Observable<any> {
    console.log(id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.config = {
      params:{
        id:id,
        update:update
      }
    };
    return this.http.put<any>(baseURL+'admin/getStaff',this.config,httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
    
  }

}
