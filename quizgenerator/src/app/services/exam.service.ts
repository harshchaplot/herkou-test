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
export class ExamService {

  config:any;
  constructor(private http:HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getQuestions() : Observable<any> {
    return this.http.get<any>(baseURL + 'test/getquestion')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getQuestionbyid(subject:any,id:any) :Observable<any> {
    console.log(id);
    // console.log(branch);
    // console.log(semester);
    
    
    this.config = {
      params : {
        id:id,
        subject:subject
      }
    };
    return this.http.get<any>(baseURL + 'test/exams/',this.config)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  sendResult(branch:any,semester:any,marks:any,subject:any,subjectId:any) :Observable<any> {
    this.config ={}
    // console.log(marks);
    // console.log(branch);
    // console.log(semester);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.config = {
      // params : {
        
        branch:branch,
        semester:semester,
        marks:marks,
        subject:subject,
        subjectId:subjectId
      // }
    };
    return this.http.post<any>(baseURL + 'test/result' , this.config , httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError))
        .pipe(delay(2000));
  }
  getResult(branch:any,semester:any) :Observable<any> {
    this.config = {
      params : {
        branch:branch,
        semester:semester,
      }
    }

    return this.http.get<any>(baseURL+ 'test/result' , this.config)
    .pipe(catchError(this.processHTTPMsgService.handleError))
  }

  sendAttempted(attempt:any,subject:any,marks:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(subject);
    
    var config ={
      // params : {
        attempt : attempt,
        subject:subject,
        marks:marks
      // }
    }
    return this.http.post<any>(baseURL + 'test/attempt/'+subject , config , httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError))
        .pipe(delay(2000));
  }

  setFlag(attempt:any): Observable<any> {
    console.log(attempt);
    
    return this.http.post<any>(baseURL+ 'users/setFlag',attempt)
    .pipe(catchError(this.processHTTPMsgService.handleError))
  }
  
  setfinalFlag(attempt:any): Observable<any> {
    console.log(attempt);
    
    return this.http.put<any>(baseURL+ 'users/setFlag/'+attempt.subjectId,attempt)
    .pipe(catchError(this.processHTTPMsgService.handleError))
  }

  getUser(id:any): Observable<any> {
    return this.http.get<any>(baseURL+ 'users/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError))
  }
  
}
