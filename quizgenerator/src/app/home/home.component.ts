import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SigninService} from '../services/signin.service';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import {Signup} from '../shared/signup';
import {HomeService} from '../services/home.service';
import { DatePipe } from '@angular/common';
import { trigger,state,style,transition,animate } from '@angular/animations';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import '@fullcalendar';

export interface Car {
  subject;
  date;
  time;
  marks;
  _id;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
],
styles: [`      
        .filter-container {
            text-align: center;
        }
        .car-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2em;
            border-bottom: 1px solid #d9dad9;
        }
        .car-details > div {
            display: flex;
            align-items: center;
        }
        .car-details > div img {
            margin-right: 14px;
        }
        .car-detail {
            padding: 0 1em 1em 1em;
            border-bottom: 1px solid #d9dad9;
            margin: 1em;
        }
        .ui-panel-content {
            padding: 1em;
        }
        .dark-theme :host ::ng-deep .car-details,
        .dark-theme :host ::ng-deep .car-detail {
            border-bottom: 1px solid #191919;
        }
        
        @media (max-width: 1024px) {
            .car-details img {
                 width: 75px;
            }
            .filter-container {
                text-align: left;
            }
        }
    `]
})
export class HomeComponent implements OnInit {

  username: string;
  subscription: Subscription;
  branch: string;
  subscription1: Subscription;
  semester: string;
  subscription2: Subscription;
  res: Object[];
  res1:Signup[];
  staff:any;
  update:any;
  result:any;
  interval:any;
  exam=[];
  cols:any;
  allexams:any;
  colsforall:any;
  cars: Car[];
  selectedCar: Car;
  displayDialog: boolean;
  options:any;
  events={};
  temp = [];
  constructor(private authService: AuthService,
    private router:Router,
    private homeservice: HomeService,
		private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
        .subscribe(name => { this.username = name; console.log(name);});
        this.subscription1 = this.authService.getBranch()
        .subscribe(name => { this.branch = name;console.log(this.branch); });
        this.subscription2 = this.authService.getSemester()
        .subscribe(name => { this.semester = name;console.log(name); });
      this.interval = setInterval(() => {
          this.getexam()
          clearInterval(this.interval)
          },2000)
      // this.getexam()
      // setTimeout(this.getexam,4000)
      // var interval = setInterval(() => {
        
      //   for (var i=0;i<this.allexams.length;i++) {
      //     this.temp.push(this.allexams[i])
      //   }
      //   this.events['data'] = this.temp

      //   console.log(this.events);
        

      // //   this.options = {
      // //     plugins:[ dayGridPlugin, timeGridPlugin, interactionPlugin ],
      // //     // defaultDate: '2017-02-01',
      // //     header: {
      // //         left: 'prev,next',
      // //         center: 'title',
      // //         right: 'dayGridMonth,timeGridWeek,timeGridDay'
      // //     },
      // //     editable: true
      // // };


      //   clearInterval(interval)
      //   },4000)
      

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  
  getexam() {
    this.exam=[]
    this.cols=null;
    console.log(this.branch);
    
    this.homeservice.getExam(this.branch,this.semester)
    .subscribe((resp) => {
      console.log(resp['exams']);
      this.allexams = resp['exams'];
      var temp = resp['exams']
      for( var i=0;i<resp['exams'].length;i++) {
        console.log(temp[i]);
      var date1 = this.datePipe.transform(temp[i].date,"dd")
      console.log(date1);
			var date2 = this.datePipe.transform(Date.now(),"dd")
        console.log(date2);
      
      if(date2<=date1 && parseInt(date1)-parseInt(date2)<2) {
        this.exam.push(temp[i])
      }
      }
      console.log(this.exam);
      this.cols = [
        { field: 'subject', header: 'Subject' }
    ];
    this.colsforall = [
      { field: 'subject', header: 'Subject' },
      { field: 'time', header: 'Time' },
      { field: 'date', header: 'Date' },
      { field: 'marks', header: 'Marks' },
      { field: '_id', header: 'Exam-Id' }
    ]
    })

  }

  selectCar(event: Event, car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
}

// onSortChange(event) {
//     let value = event.value;

//     if (value.indexOf('!') === 0) {
//         this.sortOrder = -1;
//         this.sortField = value.substring(1, value.length);
//     }
//     else {
//         this.sortOrder = 1;
//         this.sortField = value;
//     }
// }

onDialogHide() {
    this.selectedCar = null;
}

Notify(id) {
  this.homeservice.NotifyExam({subject:id})
  .subscribe((resp) => {
    console.log(resp);

  })
}

}
