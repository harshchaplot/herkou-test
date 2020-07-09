import { Routes } from '@angular/router';

import { StaffComponent } from './staff.component';
import { HomeComponent } from '../home/home.component';
// import { StaffQuestionPageComponent} from './staff-question-page/staff-question-page.component'
// import { ContactComponent } from '../contact/contact.component';
// import { ExamComponent } from '../exam/exam.component';
// import { LoginComponent } from '../login/login.component';
// import { ResultComponent} from '../result/result.component'
import {StaffHomeComponent} from '../staff-home/staff-home.component';
import { SignupComponent} from '../signup/signup.component';

export const routes: Routes = [

    {path: 'staffhome', component:StaffHomeComponent},
    // {path: 'login', component: LoginComponent},
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {path: 'homestaff', component: HomeComponent},

//   { path: 'admin',component: AdminComponent },
//   { path: 'exam',component: ExamComponent},
//   { path: 'result', component:ResultComponent },
];