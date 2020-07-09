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
export class AttemptService {

  constructor(private http:HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
    
    getAttempts(id:number) : Observable<any> {
      // var config = {
        // params: {
          // subject:subject
        // }
      // }
      return this.http.get<any>(baseURL + 'test/attempt/'+id)
        .pipe(catchError(this.processHTTPMsgService.handleError))
    }
}


