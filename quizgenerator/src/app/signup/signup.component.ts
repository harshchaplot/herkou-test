import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup,returnsignup } from '../shared/signup';
import { Router } from '@angular/router';
import { SigninService } from '../services/signin.service';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
 
interface Branch {
  value:String;
  viewValue: String;
}
interface Sem {
  value:Number;
  viewValue: Number;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .ui-message,
        :host ::ng-deep .ui-inputtext {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-message,
        :host ::ng-deep img  {
            align-self: center;
            font-size: 16px;
            margin-left: .5em;
        }
    `]
})
export class SignupComponent implements OnInit {


  branchs: Branch[] = [
    {value: 'CSE', viewValue: 'CSE'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  sem: Sem[] = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3}
  ];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  errMess : String;
  onsubmitsignupvalues : Signup;
  returnmessage : returnsignup;
  temp: Signup = null;
  msgs: Message[] = [];

  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private signupservice: SigninService,
    @Inject('BaseURL') public baseURL ) {
    // this.createForm();
   }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstname: ['', [Validators.required] ],
      lastname: ['', [Validators.required] ],
      emailid: ['', [Validators.required, Validators.pattern] ]
    });
    this.secondFormGroup = this.fb.group({
      branch:['',[Validators.required]],
      semester:['',[Validators.required]],
      contactno: ['', [Validators.required] ],
    });
    this.thirdFormGroup = this.fb.group({
      password:['', [Validators.required,Validators.pattern]],
      renterpassword:['', [Validators.required]],
      staff: Boolean
    });
  }

  onSubmitFirst()  {
    this.onsubmitsignupvalues = this.firstFormGroup.value;
    console.log(this.onsubmitsignupvalues);
    
  }
  onSubmitSecond() {
    this.temp = (this.secondFormGroup.value);
    Object.assign(this.onsubmitsignupvalues,this.temp);
    console.log(this.onsubmitsignupvalues);

  }
  onSubmitThird() {
    
    this.temp = this.thirdFormGroup.value;
    Object.assign(this.onsubmitsignupvalues,this.temp);
    delete this.onsubmitsignupvalues.renterpassword;
    
    if(this.onsubmitsignupvalues.staff) {
      this.onsubmitsignupvalues.username = this.onsubmitsignupvalues.emailid;
    this.onsubmitsignupvalues.admin = false;
    this.onsubmitsignupvalues.student = false;
    this.onsubmitsignupvalues.staff = false;
    console.log(this.onsubmitsignupvalues);
    this.signupservice.signupStaff(this.onsubmitsignupvalues)
    .subscribe(staff => {
      console.log('abcd');
      console.log(staff);
      this.returnmessage = staff;
      if(this.returnmessage.err=="A staff with the given username is already registered") {    
        this.router.navigate(['/']);
        }
      else {
          this.router.navigate(['/login']);
        }
    },
    errmess => { this.returnmessage = null; this.errMess = <any>errmess; });
    }

    else {
    this.onsubmitsignupvalues.username = this.onsubmitsignupvalues.emailid.slice(0,8);
    this.onsubmitsignupvalues.admin = false;
    this.onsubmitsignupvalues.student = true;
    this.onsubmitsignupvalues.staff = false;
    
    console.log(this.onsubmitsignupvalues);
    this.signupservice.signupPost(this.onsubmitsignupvalues)
    .subscribe( dish => {
      console.log('abcd');
      console.log(dish);
      this.returnmessage = dish;
      if(this.returnmessage.err=="A user with the given username is already registered") {    
        this.router.navigate(['/']);
        }
      else {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:dish['status']+' '+dish['msg']});
          this.router.navigate(['/signup']);
                  this.firstFormGroup.reset();
                  this.secondFormGroup.reset();
                  this.thirdFormGroup.reset();

            // this.examFormDirectives.resetForm({
            // });
        }
    },
    errmess => { this.returnmessage = null; this.errMess = <any>errmess;
      this.msgs = [];
      // console.log(errmess);
      
      this.msgs.push({severity:'error', summary:'Error:', detail:'Enter Valid Email Address'});
     }, );
  }
  }
  
  reset() {
    this.onsubmitsignupvalues = null;
    this.temp = null;
  }

}

  // createForm() {
  //   this.signupForm = this.fb.group({
  //     firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
  //     lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
  //     email: ['', [Validators.required, Validators.email] ],
  //     branch:[''],
  //     contactno: ['0', [Validators.required, Validators.pattern] ],
  //     password:[''],
  //     resetpassword:['']
      
  //   });

  //   this.firstFormGroup.valueChanges
  //     .subscribe(data => this.onValueChanged(data));

  //   this.onValueChanged(); // (re)set validation messages now

  // }

  // onValueChanged(data?: any) {
  //   if (!this.feedbackForm) { return; }
  //   const form = this.feedbackForm;
  //   for (const field in this.formErrors) {
  //     if (this.formErrors.hasOwnProperty(field)) {
  //       // clear previous error message (if any)
  //       this.formErrors[field] = '';
  //       const control = form.get(field);
  //       if (control && control.dirty && !control.valid) {
  //         const messages = this.validationMessages[field];
  //         for (const key in control.errors) {
  //           if (control.errors.hasOwnProperty(key)) {
  //             this.formErrors[field] += messages[key] + ' ';
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

