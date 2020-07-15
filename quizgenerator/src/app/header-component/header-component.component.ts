import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SigninService} from '../services/signin.service';
import { Router } from '@angular/router';
import {Signup} from '../shared/signup';
import { Exam} from '../shared/admin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService} from '../services/admin.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  searchForm : FormGroup;
  searchvalue: String;
  username: string = undefined;
  branch: string = undefined;
  semester: string = undefined;
  exams: Exam = null;
  exams1: any;
  subscription: Subscription;
  subscription1: Subscription;
  subscription2: Subscription;
  ipAddress:any;
  res: Object[];
  res1:Signup[];
  constructor(private authService: AuthService,
    private router:Router,
    private singupservice : SigninService,
    private fb: FormBuilder,
    private adminservices: AdminService) { }

  ngOnInit(): void {
    fetch('https://jsonip.com', { mode: 'cors' })
  .then((resp) => resp.json())
  .then((ip) => {
    this.ipAddress=ip.ip
    console.log(this.ipAddress);
    // return ip.ip
  });
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
        .subscribe(name => { console.log(name); this.username = name; });
    this.subscription1 = this.authService.getBranch()
        .subscribe(name => { console.log(name); this.branch = name; });
    // this.subscription2 = this.authService.getSemester()
    //     .subscribe(name => { console.log(name); this.semester = name; });
    
    this.searchForm =  this.searchForm = this.fb.group ({
      searchquery: ['', [Validators.required]]
      });
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  gologin() {
    this.router.navigate(['/login']);
  }
  
   goSignup() {
    this.router.navigate(['/login']);
  }

  logOut() {
    console.log(this.username);
    
    this.singupservice.out(this.ipAddress,this.username)
    .subscribe((res)=>{console.log(res);
    })
    this.username = undefined;
      // console.log('hoil');
      console.log(this.username);
    this.authService.logOut();
    this.router.navigate(['/home']);

   }
  getuser() {
    this.singupservice.getusers()
      
      .subscribe(res => 
        {
          this.res=res;
          this.res1=res.users;
          console.log(this.res1);
        });
  }
}
