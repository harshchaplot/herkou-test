import { Component, OnInit } from '@angular/core';
import { StaffService } from "../services/staff.service";
import { Subscription } from 'rxjs';
import { AuthService} from '../services/auth.service'
@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.scss']
})
export class StaffHomeComponent implements OnInit {

  constructor(private staffservice:StaffService,
    private authService:AuthService) { }
  branch:string;
  flag:Boolean;
  subjects:any;
  seasons:any;
  subscription:Subscription;
  question:String;
  option1:String;
  option2:String;
  option3:String;
  option4:String;
  marks:Number;
  selectedanswer:any;
  send:any;
  subject:any;
  sem:any;
  minus:Number;
  ngOnInit(): void {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getBranch()
        .subscribe(name => { console.log(name); this.branch = name; });
  }

  getSubject() {
    this.staffservice.getSubjects(this.branch)
    .subscribe((result) => {
      console.log(result);
      
      this.subjects = result['subjects']
    })
  }

  questionsEnter(name:any,sem:any) {
    console.log(name,sem);
    this.flag=true
    this.sem=sem
    this.subject=name
    // this.send.subject = name
    // this.send.semester = sem
    // console.log(this.send);
    
  }
  Enter(form:any) {
    this.send = {'question':this.question,'option1':this.option1,'option2':this.option2,
    'option3':this.option3,'option4':this.option4,'ans':this.selectedanswer,'marks':this.marks,'minus':this.minus,
    'subject':this.subject,'semester':this.sem}
    
    console.log(this.send);
    
    this.staffservice.questionPost(this.send)
    .subscribe((resp) => {
      console.log(resp);
      form.reset()
    })
  }


}
