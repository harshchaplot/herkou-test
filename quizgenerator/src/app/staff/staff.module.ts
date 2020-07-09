import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';
import { StaffHomeComponent } from '../staff-home/staff-home.component';
import { HomeComponent } from '../home/home.component';
// import { StaffQuestionPageComponent } from './staff-question-page/staff-question-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [StaffHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [ RouterModule ],
})
export class StaffModule { }
