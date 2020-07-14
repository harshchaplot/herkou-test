import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {Router } from '@angular/router';
import { timer } from 'rxjs';
import { FormBuilder,FormGroup,Validators, FormGroupDirective,FormControl } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { DatePipe } from '@angular/common';
// import {HeaderComponentComponent} from '../header-component/header-component.component';
import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
// import { AuthService } from './auth.service';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { LocalStorageService } from 'angular-2-local-storage';

export interface Car {
	subject;
	date;
	time;
	marks;
	_id;
  }

@Component({
	selector: 'app-exam',
	templateUrl: './exam.component.html',
	styleUrls: ['./exam.component.scss'],
	providers: [ConfirmationService],
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
export class ExamComponent implements OnInit {
	public message = 'Hola Mundo!';
	arr:any[];
	temp = [];
	id:any;
	answer = [];
	temp1={};
	items = []
	prev:any;
	next:any;
	temp3 = [];
	mapping:any = {};
	quecount: any;
	subscription: Subscription;
	subscription1: Subscription;
	subscription2: Subscription;
	subscription3: Subscription;
	branch: string = undefined;
	semester: string = undefined;
	username:String = undefined;
	question:any;
	questionnumber:number=null ;
	selectedanswer: string;
	seasons:string[];
	answerArray = [];
	currentindex:any;
	selectedRow : any;
	setClickedRow : Function;
	selectedItem : any;
	answers =[];
	last:any;
	timeLeft: number = 60;
	minute: number;
  	interval:any;
	marks:any;
	errMess:any;
	exams:any;
	subject:any;
	exammarks:number;
	today = Date.now()
	flag:Boolean=false;
	flag1:Boolean=false;
	questionflag={};
	objectKeys = Object.keys;
	mycolor = 'red';
	radius = 3;
	final ={};
	examId:any;
	attemptedFlag:Boolean=false;
	msg:String;
	// msgs:any;
	msgs: Message[] = [];
	testing={};
	tempExam=[];
	selectedCar: Car;
  displayDialog: boolean;
  visibleSidebar5;
  documents:any;
  halfcomplete:Boolean=false;

	constructor(private examservice: ExamService,
		private confirmationService: ConfirmationService,
		private authService: AuthService,
		private fb: FormBuilder,
		private router:Router,
		private adminservice:AdminService,
		private datePipe: DatePipe,
		private _localStorageService: LocalStorageService) { 
			this.setClickedRow = function(index){
				if(index!="empty"){
				this.selectedItem = index;
				this.selectedRow[index]=this.answers;
				}  
			}	
		}

	ngOnInit(): void {
		// console.log(this._localStorageService.getStorageType())
		var date = new Date();
   console.log(this.datePipe.transform(date,"yyyy-MM-dd"));
		this.authService.loadUserCredentials();
		this.subscription = this.authService.getUsername()
				.subscribe(name => { this.username = name; });
		this.subscription1 = this.authService.getBranch()
				.subscribe(name => { this.branch = name; });
		this.subscription2 = this.authService.getSemester()
				.subscribe(name => { this.semester = name; });	
		this.subscription3 = this.authService.getId()
				.subscribe(id => {this.id = id});
			
		this.searchTests()

	}
	confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
				console.log(this.answerArray);
				console.log(this.answers)
				
				for(var i=1;i<this.answers.length;i++) {
					this.answer=[]
					if(this.answers[i]==this.answerArray[i]) {
						this.marks+=1
						this.answer.push(this.answers[i])
						this.answer.push('True')
						this.answer.push(this.answerArray[i])
		
						this.final[this.items[i-1][1]] = this.answer
						}
					else {
						if(this.answers[i]!=null) {
							this.answer.push(this.answers[i])
						}
						else {
							this.answer.push('NA')
						}
						this.answer.push('False')
						this.answer.push(this.answerArray[i])
						this.final[this.items[i-1][1]] = this.answer
					}
				}
					console.log(this.final);
					// this.final['subject'] = (this.subject)
				this.examservice.sendAttempted(this.final,this.examId,this.marks)
				.subscribe((resp) => {
					console.log(resp);
		
				})
				clearInterval(this.interval)
				console.log(this.marks);
				this.examservice.sendResult(this.branch,this.semester,this.marks,this.subject,this.examId)
					.subscribe((name) => {console.log('Result Entered successfully',name)},
					error => {
						console.log(error);
						this.errMess = error;
						console.log(this.errMess);
					  }
					  );
				
					  this.examservice.setfinalFlag({subject:this.subject,subjectId:this.examId,completionFlag:true})
					  .subscribe((resp) => {
						  console.log(resp);
					  })
				
				this.router.navigate(['/home']);
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }

	searchQuestions() {
		
		this.marks=0;
		this.selectedRow=[];
		this.seasons=[];
		this.answerArray=[];
		this.answers=[];
		this.temp3=[]
		this.questionnumber=0;
		this.question=null;
		this.arr = [];
		this.flag1=true
		for (var i=0; i<this.exammarks;i++) {
			this.answerArray[i+1]='NA'
			// this.answers[i+1] = null
		}
		console.log(this.answerArray)
		console.log(this.answers);
		while(this.arr.length < this.exammarks){
			var r = Math.floor(Math.random() * 17) ;
			if(this.arr.indexOf(r) === -1) this.arr.push(r);
			this.quecount = this.arr.length;
		}

		for(var i=0;i<this.quecount;i++) {
			this.mapping[i+1] = this.arr[i]
		}
		// this.mapping[this.quecount+1] = 11
		// this.mapping[this.quecount+11] = 22
		console.log(this.mapping);

		this._localStorageService.clearAll();

		for (var question in this.mapping) {
			this.items.push([question, this.mapping[question]]);
			console.log(this.mapping[question]);
			
			this._localStorageService.set(this.mapping[question].toString(),null)
		}
		console.log(this._localStorageService.keys());

		

		this.items.sort(function(a, b) {
			return a[0] - b[0];
		});
		console.log(this.items);
		console.log(this.items[0]);


		this.questionnumber+=1
		this.hasPrevNext(this.questionnumber,"")
		this.selectedItem = (this.questionnumber-1);  

	}

	hasPrevNext(id,message) {
		// console.log(this.selectedanswer);
		this.seasons=[]
		// this.answerArray=[];
		this.selectedanswer=null;

		if(message=="n")
		this.questionnumber+=1
		if(message=="p")
		this.questionnumber-=1
		if(message=="l")

		this.questionnumber=parseInt(id);
		this.getQuestion(id)
		const ObjectLength = Object.keys(this.mapping).length
		this.currentindex = id-1;
		this.prev = (ObjectLength + this.currentindex - 1) % ObjectLength +1;
		this.next = (ObjectLength + this.currentindex + 1) % ObjectLength +1;
	}

	getQuestion(key) {
			this.last=0;
			// console.log(this.mapping);
			
			// this.examservice.getQuestionbyid(this.branch,this.semester,this.mapping[key])
			this.examservice.getQuestionbyid(this.subject,this.mapping[key])
				.subscribe((question) => {this.question = question; 
					// console.log(this.question);
				
				 this.seasons = [question.option1, question.option2, question.option3, question.option4];
				//  this.answerArray=[question.option1.ans, question.option2.ans, question.option3.ans, question.option4.ans];
				//  console.log(this.answerArray);
				// console.log(this.seasons);
				
				this.shuffle(this.seasons)
				 this.answerArray[this.questionnumber] = this.question.ans
				//  console.log(this.answerArray);
				 
				 if(this.answers!=[]) {
					this.last=this.answers[this.questionnumber]
				}
				});		
	}

	
	shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	  }
	  
	test() {
		if(this.answers[this.questionnumber]) {
		this.testing[this.questionnumber] = true 
	console.log(this.testing);
	}
	}

	startTimer() {
		var timeLeft = this.timeLeft
		var minleft = this.minute
	    this.interval = setInterval(() => {
			
		if(this.timeLeft < 10 && this.timeLeft>1) {
			this.timeLeft --;
			var a = ('0' + this.timeLeft).slice(-2)
			this.timeLeft = parseInt(a)
			// console.log(a,this.timeLeft);
			
		}
	      else if (this.timeLeft > 0) {
			this.timeLeft--;
			
		  }
		  else if(this.minute > 0) {
			this.minute--;
			this.timeLeft = timeLeft;

		  } 
		  else {
			console.log('Your answers');
			console.log(this.answers);
			clearInterval(this.interval)
			this.submit()
			
	      }
	    },1000)
	  }

	submit() {

		for(var i=1;i<this.answers.length;i++) {
			this.answer=[]
			if(this.answers[i]==this.answerArray[i]) {
				this.marks+=1
				this.answer.push(this.answers[i])
				this.answer.push('True')
				this.answer.push(this.answerArray[i])

				this.final[this.items[i-1][1]] = this.answer
				}
			else {
				if(this.answers[i]!=null) {
					this.answer.push(this.answers[i])
				}
				else {
					this.answer.push('NA')
				}
				this.answer.push('False')
				this.answer.push(this.answerArray[i])
				this.final[this.items[i-1][1]] = this.answer
			}
		}
			console.log(this.final);
			// this.final['subject'] = (this.subject)
		this.examservice.sendAttempted(this.final,this.examId,this.marks)
		.subscribe((resp) => {
			// console.log(resp);

		})
		clearInterval(this.interval)
		console.log(this.marks);
		this.examservice.sendResult(this.branch,this.semester,this.marks,this.subject,this.examId)
			.subscribe((name) => {console.log('Result Entered successfully',name)},
			error => {
				// console.log(error);
				this.errMess = error;
				// console.log(this.errMess);
			  }
			  );
		
			  this.examservice.setfinalFlag({subject:this.subject,subjectId:this.examId,completionFlag:true})
			  .subscribe((resp) => {
				//   console.log(resp);
			  })
		
		this.router.navigate(['/home']);
		}

	savetemp(season) {
			this.answers[this.questionnumber] = season
			// console.log(this.answers);
			// console.log(this.answerArray);
			this.last=null
			// console.log(this._localStorageService.keys());
			// var temp = []
			// temp.push(season)
			// temp.push(this.answerArray[this.questionnumber])
			
			this._localStorageService.set(this.mapping[this.questionnumber].toString(),[season,this.answerArray[this.questionnumber]])
			// this._localStorageService.set('test'+this.mapping[this.questionnumber],this.answerArray[this.questionnumber])
			// this._localStorageService.set(this.)
			// console.log(this.mapping[this.questionnumber],this._localStorageService.get(this.mapping[this.questionnumber].toString()));
			// console.log(this._localStorageService.get('test'+this.mapping[this.questionnumber].toString()));
			

		}

	searchTests() {
		this.exammarks = 0
		console.log('inside');
		console.log(this.semester);
		var date2 = this.datePipe.transform(this.today,"dd")
		console.log(date2);
		
		this.adminservice.searchExam(this.branch,this.semester)
		  .subscribe((tests) => { 
			  console.log(tests)
			this.exams = tests.exams[0];
			console.log(this.exams);
			this.tempExam.push(this.exams)
			this.exammarks=this.exams.marks
			this.minute = this.exams.duration-1
			this.examId = this.exams['_id']
			console.log(this.examId);
			
			// this.today = this.exams.date
			var date1 = this.datePipe.transform(this.exams.date,"dd")
			var time1 = this.exams.time
			var date2 = this.datePipe.transform(this.today,"dd")
			var time2 = this.datePipe.transform(this.today,"HH:mm")

			console.log(date1,date2,time1,time2);

			if(time1<=time2) {
				this.subject = this.exams.subject
				this.flag=true
			}
			
		  });
	  }

	  flagquestion() { 
		this.questionflag[this.questionnumber] = true
		console.log(this.questionflag);
		// this._localStorageService.set('test',null)
		// var test = this._localStorageService.get('test')
		// console.log(test);

		// this._localStorageService.set('test',1)
		// var test = this._localStorageService.get('test')

		// console.log(test);
		
		
	  }
	  removeflag() {
		this.questionflag[this.questionnumber] = false
		console.log(this.questionflag);
	  }
	  flagandremoveattempt() {
		delete this.answers[this.questionnumber]
		this.questionflag[this.questionnumber] = true
	  }

	//   getVal() {
	// 	  return this.quecount
	//   }

	  setFlag() {
		  this.msg=null;
		//   var temp2 = 0;
		  this.examservice.getUser(this.id)
		  .subscribe((resp) => {
			  console.log(resp['user'][0]['attempted']);
			  var temp = resp['user'][0]['attempted']
			  for (var i =0;i<temp.length;i++) {
				  console.log(temp[i])
				//   if(temp[i]['subjectId']==this.examId) {
				// 	  this.attemptedFlag = true
				// 	  break
				//   }
				  if(temp[i]['subjectId']==this.examId && temp[i]['flag'] && !temp[i]['completionFlag'])
				  {
					  this.halfcomplete = true
					//   this.attemptedFlag = false
					  break
				  }
				  
				  else if(temp[i]['subjectId']==this.examId && temp[i]['flag'] && temp[i]['completionFlag'])
				   {
					  this.attemptedFlag = true
					//   this.halfcomplete = false
					  break
				   }
			  }
			  if(this.attemptedFlag) {

				this.msg = ('Already attempted');
				this.attemptedFlag = false
			  }
			  
			  else if(!this.attemptedFlag && !this.halfcomplete) {
				  this.attemptedFlag = true
				this.examservice.setFlag({subject:this.subject,subjectId:this.examId,flag:true})
				.subscribe((resp) => {
					console.log(resp);
				})
			  }

			  if (this.halfcomplete) {
				this.msg = ('want to continue Your Exam');
				console.log(this.msg);
				
				// this.halfcomplete = false
			}

		  })

	  }
	  selectCar(event: Event, car: Car) {
		this.selectedCar = car;
		this.displayDialog = true;
		event.preventDefault();
	}
	
	onDialogHide() {
		this.selectedCar = null;
	}

	continue() {
		this.mapping = {}
		this.items = []
		this.marks=0;
		this.answerArray=[]
		this.answers=[]

		var temp = this._localStorageService.keys()
		console.log(temp);
		
		// this.items.sort(function(a, b) {
			// return a[0] - b[0];
		// });
		for(var i=0;i<temp.length;i++) {
			if(this._localStorageService.get(temp[i])) {
			var temp1 = this._localStorageService.get(temp[i])
			console.log(temp1[0]);

			this.answers[i+1]= this._localStorageService.get(temp[i])[0]
			this.answerArray[i+1]= this._localStorageService.get(temp[i])[1]
			}
			else {
				this.answerArray[i+1] = 'NA'
			}
			// this.answerArray[i+1] = this._localStorageService.get('test'+temp[i])
			if(this.answers[i+1]){
			this.testing[i+1] = true}
			this.mapping[i+1] = temp[i]
		}

		console.log(this.answers,this.answerArray);
		
		for (var question in this.mapping) {
			this.items.push([question, this.mapping[question]]);
			// console.log(this.mapping[question]);
			
			// this._localStorageService.set(this.mapping[question],null)
		}
		this.quecount = this.items.length

		// console.log(this._localStorageService.keys());


		// this.items.sort(function(a, b) {
		// 	return a[0] - b[0];
		// });

		console.log(this.items,this.mapping,this.answers);
		
		this.flag1=true
		this.questionnumber=1
		this.hasPrevNext(this.questionnumber,"")
		this.selectedItem = (this.questionnumber-1);



	}
	
}