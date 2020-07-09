import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { ExamComponent} from '../exam/exam.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ResultService } from '../services/result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  message:String;
  username: string;
  subscription: Subscription;
  branch: string;
  subscription1: Subscription;
  semester: string;
  subscription2: Subscription;
  subscription3: Subscription;
  id:any;
  subjects =[];
  temp = {}
  UserbyId:any;
  items=[];
  attempts:any;

  constructor(private authService :AuthService,
    private resultservice: ResultService) { }

  ngOnInit(): void {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
        .subscribe(name => { this.username = name; console.log(name);});
    this.subscription1 = this.authService.getBranch()
        .subscribe(name => { this.branch = name;console.log(this.branch); });
    this.subscription2 = this.authService.getSemester()
        .subscribe(name => { this.semester = name;console.log(name); });
    this.subscription3 = this.authService.getId()
        .subscribe(name => { this.id = name;console.log(name); });

    this.resultservice.getUser()
    .subscribe((user)=>{
      console.log(user);

      this.UserbyId = user['user'];
      console.log(this.UserbyId);
      
      for (var i=0;i<this.UserbyId.attempted.length;i++) {
        this.temp[this.UserbyId.attempted[i].subject] = this.UserbyId.attempted[i].subjectId
        this.subjects.push(this.temp)
        // this.subjects.push(this.UserbyId.attempted[i].subjectId)
      }
      this.subjects = [...new Set(this.subjects)]
      console.log(this.subjects);
      
    })
}

getAttempts(subject) {
  this.items = []
  this.attempts = []
  
  // console.log(this.exams.length);

  // for (var i=0;i<this.exams.length;i++) {
    // console.log(this.exams[i]);
    // if(this.exams[i]['subject']==subject) {
      // this.id = this.exams[i]['_id']
      // break
    // }
  // }
  console.log(this.id);

  this.resultservice.getAttempts(subject,this.id)
  .subscribe((resp) => {
    console.log(resp);
    var id = resp[0]['_id']
    console.log(id);
    this.attempts = resp
    // this.attempt=resp[0]['attempt']

    // for (var question in this.attempt) {
      // this.items.push([question, this.attempt[question]]);
    // }
    
    // this.items.sort(function(a, b) {
      // return a[0] - b[0];
    // });
  })
}
  // getResult() {
  //   this.result = this.examcomponent.answers
  //   console.log(this.result);
  // }
 

}
