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
export class GeneralService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  // searchservice(): Observable<any> {
    public getIPAddress()  
  {  
    // return this.http.get('');  
    fetch('https://jsonip.com', { mode: 'cors' })
  .then((resp) => resp.json())
  .then((ip) => {
    console.log(ip.ip);
    return ip.ip
  });
  }  
  // }
}
