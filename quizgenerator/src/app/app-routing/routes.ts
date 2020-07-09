import { Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { HomeComponent } from '../home/home.component';
// import { ContactComponent } from '../contact/contact.component';
import { ExamComponent } from '../exam/exam.component';
import { LoginComponent } from '../login/login.component';
import { ResultComponent} from '../result/result.component'
import { SignupComponent} from '../signup/signup.component';
import {StaffComponent} from '../staff/staff.component';
import {StaffModule} from '../staff/staff.module'
import {AuthGuardService} from '../services/auth-guard.service';
import {AttemptComponent} from '../attempt/attempt.component';
export const routes: Routes = [
    {path: 'signup', component:SignupComponent},
    {path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home',canActivate: [AuthGuardService], component: HomeComponent},
  { path: 'admin',component: AdminComponent },
  { path: 'exam',canActivate: [AuthGuardService],component: ExamComponent},
  { path: 'result',canActivate: [AuthGuardService], component:ResultComponent },
  {path: 'exam/:id', component:AttemptComponent},
  // {
  //   path: '',
  //   redirectTo: 'staffhome',
  //   pathMatch: 'full',
  // }, {
  //   {
  //   path: '',
  //   canActivate: [AuthGuardService],
  //   component: StaffComponent,
  //   children: [
  //       {
  //     path: '',
  //     loadChildren: '../staff/staff.module#StaffModule'
  // }]}
];

