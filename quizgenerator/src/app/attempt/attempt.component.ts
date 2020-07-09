import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import {AttemptService} from '../services/attempt.service';
@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.scss']
})
export class AttemptComponent implements OnInit {

  attempts=[];
  errMess:any;
  constructor(private route: ActivatedRoute,
    private attemptservice:AttemptService) { }

  ngOnInit(): void {

    this.route.params.pipe(switchMap((params: Params) => { return this.attemptservice.getAttempts(params['id'])}))
    .subscribe((resp) => {
      console.log(resp);
      this.attempts = resp;
      
    },errmess => {
      console.log(errmess)
      this.errMess = []
      this.errMess.push({severity:'error', summary:'Error:', detail:'You Have Not Verified Your Email Address'});
      console.log(this.errMess);
      
    })
  }

}
