import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router,Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Exam } from '../shared/admin';
import { AdminService } from '../services/admin.service';

interface Branch {
  value:String;
  viewValue: String;
}
interface Sem {
  value:Number;
  viewValue: Number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
  examForm : FormGroup;
  examData : Exam;
  formErrors = {
    'Subject': '',
    'Brach': '',
  };

  validationMessages = {
    'Subject': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'Branch': {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 2 characters long.',
      'maxlength':     'Comment cannot be more than 25 characters long.'
    },
    
  };

  @ViewChild('fform') examFormDirectives;

  constructor(
    private location : Location,
    private route : ActivatedRoute,
    private fb: FormBuilder,
    private examschedule : AdminService,
    @Inject('BaseURL') public baseURL)
    {  
       this.createForm();
    }

  ngOnInit(): void {
  }


  createForm() {
    this.examForm = this.fb.group({
      subject: ['', [Validators.required]],
      time: [, [Validators.required]],
      date: Date(), 
      branch:[''],
      semester:['']
    });

    this.examForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.examForm) { return; }
    const form = this.examForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  
  onSubmit() {
    this.examData = this.examForm.value;
    console.log(this.examData);
    this.examschedule.scheduleExam(this.examData)
      .subscribe((exam) => {this.examData=exam})
    this.examForm.reset();
    this.examFormDirectives.resetForm({
    });
  }
}
