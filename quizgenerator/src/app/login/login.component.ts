import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { login,returnlogin } from '../shared/login';
import { AuthService } from '../services/auth.service';
import { GeneralService } from '../services/general.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  onsubmitsignupvalues: login;
  temp: login = null;
  errMess: String =null;
  returnmessage: returnlogin;
  ipAddress:any;
  subscription: Subscription;
  username:any;
  return: string = '';

  constructor(private fb: FormBuilder,
    private router: Router,
    private ip:GeneralService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.getIP();
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/home');
    fetch('https://jsonip.com', { mode: 'cors' })
  .then((resp) => resp.json())
  .then((ip) => {
    this.ipAddress=ip.ip
    console.log(this.ipAddress);
    // return ip.ip
  });
    this.firstFormGroup = this.fb.group({
      emailid: ['', [Validators.required, Validators.pattern] ]
    });
    this.secondFormGroup = this.fb.group({
      password:['', [Validators.required,Validators.pattern]]
    });

    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
        .subscribe(name => {  this.username = name; console.log(this.username); });
  }

  // getIP()  
  // {  
  //   this.ipAddress=this.ip.getIPAddress()  
        
  //     console.log('ipaddress' , this.ipAddress);
  //   };  
 
  onSubmitFirst()  {
    
    this.onsubmitsignupvalues = this.firstFormGroup.value;
    this.onsubmitsignupvalues.username = this.onsubmitsignupvalues.emailid.slice(0,8);
    delete this.onsubmitsignupvalues.emailid
    console.log(this.onsubmitsignupvalues);
    
  }
  onSubmitSecond() {
    this.temp = (this.secondFormGroup.value);
    Object.assign(this.onsubmitsignupvalues,this.temp);
    console.log(this.onsubmitsignupvalues);
    // console.log(this.username);
    
    // this.authService.checkanotherlogin(this.onsubmitsignupvalues)
    // .subscribe(data => {
    //   console.log(data);
    
    // if(data.length==0){

    //         this.authService.checkanotherIP(this.ipAddress)
    //         .subscribe(data => {
    //         console.log(data);

            // if(data.length==0){
      
                      this.authService.logIn(this.onsubmitsignupvalues,this.ipAddress)
                        .subscribe(data =>  {     
                        
                            // console.log('inside');        
                            console.log(data);
                            console.log(this.errMess);
                            // this.router.navigate(['/home']);
                            this.router.navigateByUrl(this.return);
                          },
                        error => {
                          console.log(error);
                          this.errMess = error;
                          console.log(this.errMess);
                        },
                      );
                    // }
              // else {
                // console.log('Same System cannot be use twice in one exam');
                // }
  //             }
  //           )
  //   }
  // else {
  //   console.log('Same User can\'t login at same time');
  // }
  // });
  }
  reset() {
    this.onsubmitsignupvalues=null;
    this.temp=null;
  }
  

}
