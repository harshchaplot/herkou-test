import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

interface AuthResponse {
  status: string;
  success: string;
  token: string;
}

interface JWTResponse {
  status: string;
  success: string;
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  config:any;
  tokenKey = 'JWT';
  isAuthenticated: Boolean = false;
  id: Subject<any> = new Subject<any>();
  username: Subject<string> = new Subject<string>();
  branch: Subject<string> = new Subject<string>();
  semester: Subject<string> = new Subject<string>();
  
  authToken: string = undefined;

   constructor(private http: HttpClient,
     private processHTTPMsgService: ProcessHTTPMsgService) {
   }

   checkJWTtoken() {
    this.http.get<JWTResponse>(baseURL + 'users/checkJWTtoken')
    .subscribe(res => {
      console.log('JWT Token Valid: ', res);
      this.sendUsername(res.user.username);
      this.sendBranch(res.user.branch);
      this.sendSem(res.user.semester);
      this.sendId(res.user._id);
    },
    err => {
      console.log('JWT Token invalid: ', err);
      this.destroyUserCredentials();
    });
  }
  sendId(id:any) {
    this.id.next(id);
  }
   sendUsername(name: string) {
     this.username.next(name);
   }
   sendBranch(branch: string) {
     this.branch.next(branch);
   }
   sendSem(sem:string) {
     this.semester.next(sem);
   }

   clearUsername() {
     this.username.next(undefined);
     this.branch.next(undefined);
     this.semester.next(undefined);
   }

   loadUserCredentials() {
     const credentials = JSON.parse(localStorage.getItem(this.tokenKey));
     console.log('loadUserCredentials ', credentials);
     if (credentials && credentials.username !== undefined) {
       this.useCredentials(credentials);
       if (this.authToken) {
        this.checkJWTtoken();
       }
     }
   }

   storeUserCredentials(credentials: any) {
     console.log('storeUserCredentials ', credentials);
     localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
     this.useCredentials(credentials);
   }

   useCredentials(credentials: any) {
     this.isAuthenticated = true;
     this.sendUsername(credentials.username);
     this.authToken = credentials.token;
   }

   destroyUserCredentials() {
     this.authToken = undefined;
     this.clearUsername();
     this.isAuthenticated = false;
     localStorage.removeItem(this.tokenKey);
   }

   signUp() {

   }

   checkanotherlogin(username:any): Observable<any> {
     this.config = {
       params: {
          'username':username.username
       }
     }
     console.log(username);
     
     return this.http.get<any>(baseURL + 'users/activeuser',this.config)
     .pipe(catchError(this.processHTTPMsgService.handleError))
   }

   checkanotherIP(ip:any): Observable<any> {
    this.config = {
      params: {
         'ip':ip,
      }
    }
    return this.http.get<any>(baseURL + 'users/ip',this.config)
    .pipe(catchError(this.processHTTPMsgService.handleError))
  }

   logIn(user: any,ip:any): Observable<any> {
    
     return this.http.post<AuthResponse>(baseURL + 'users/login',
       {'username': user.username, 'password': user.password, 'ip':ip})
       .pipe( map(res => {
           this.storeUserCredentials({username: user.username, token: res.token,branch:user.branch,semester:user.semester});
           return {'success': true, 'username': user.username,'branch':user.branch,'semester':user.semester };
       }),
        catchError(error => this.processHTTPMsgService.handleError(error)));
   }

   logOut() {
     this.destroyUserCredentials();
   }

   isLoggedIn(): Boolean {
     return this.isAuthenticated;
   }

   getUsername(): Observable<string> {
     return this.username.asObservable();
   }

   getBranch(): Observable<string> {
    return this.branch.asObservable();
  }
  getSemester(): Observable<string> {
    return this.semester.asObservable();
  }
  getId(): Observable<any> {
    return this.id.asObservable();
  }

   getToken(): string {
     return this.authToken;
   }
   
}