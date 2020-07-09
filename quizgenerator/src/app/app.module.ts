// Components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

// Services
import { SigninService } from './services/signin.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { AuthService } from './services/auth.service';
// Shared
import { baseURL } from './shared/baseurl';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {  MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatLineModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import {TableModule} from 'primeng/table';

import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthInterceptor,UnauthorizedInterceptor } from './services/auth.interceptor';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AdminComponent } from './admin/admin.component';
import { ExamComponent } from './exam/exam.component';

import { DatePipe } from '@angular/common';

import {AtomSpinnerModule} from 'angular-epic-spinners';
import {HalfCircleSpinnerModule} from 'angular-epic-spinners';

import {SpringSpinnerModule} from 'angular-epic-spinners';
import {enableProdMode} from '@angular/core';

import { SemipolarSpinnerModule } from "angular-epic-spinners";
import { ResultComponent } from './result/result.component';
import { StaffComponent } from './staff/staff.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {ProgressBarModule} from 'primeng/progressbar';
// import {ConfirmationService} from 'primeng/api';
// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';   
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import { AttemptComponent } from './attempt/attempt.component';
import {DataViewModule} from 'primeng/dataview';
// import {DataViewDemo} from './dataviewdemo';
// import {DataViewDemoRoutingModule} from './dataviewdemo-routing.module';
// import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';

// import {FullCalendarDemo} from './fullcalendardemo';
// import {FullCalendarDemoRoutingModule} from './fullcalendardemo-routing.module';
import {FullCalendarModule} from 'primeng/fullcalendar';
// import {DialogModule} from 'primeng/dialog';
// import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
// import {ButtonModule} from 'primeng/button';
// import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {SidebarModule} from 'primeng/sidebar';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
// import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { LocalStorageModule } from 'angular-2-local-storage';
// import {CalendarModule} from 'primeng/calendar';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponentComponent,
    AdminComponent,
    ExamComponent,
    ResultComponent,
    StaffComponent,
    AttemptComponent,
    
  ],
  imports: [
    A11yModule,ClipboardModule,DragDropModule,PortalModule,ScrollingModule,CdkStepperModule,CdkTableModule,CdkTreeModule,MatBottomSheetModule,MatButtonToggleModule,MatChipsModule,
    MatDatepickerModule,MatDividerModule,MatExpansionModule,MatIconModule,MatMenuModule,MatNativeDateModule,MatRippleModule,MatPaginatorModule,MatProgressBarModule,MatRadioModule,
    MatSidenavModule,MatSnackBarModule,MatSortModule,MatTableModule,MatTabsModule,MatTooltipModule,MatTreeModule,ConfirmDialogModule,MessagesModule,PasswordModule,CardModule,TableModule,HalfCircleSpinnerModule,
    ProgressBarModule,ToggleButtonModule,BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),MessagesModule,MessageModule,LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
  }),CalendarModule,
    DataViewModule,PanelModule,InputTextModule,ButtonModule,DialogModule,DropdownModule,TableModule,TabViewModule,FullCalendarModule,CalendarModule,CheckboxModule,CodeHighlighterModule,SidebarModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatLineModule,
    FlexLayoutModule,
    HttpModule,
    HttpClientModule,
    SemipolarSpinnerModule,
    AtomSpinnerModule,
    SpringSpinnerModule,

    
  ],
  providers: [SigninService,,
    DatePipe,
  ProcessHTTPMsgService,
  AuthService,
  {provide: 'BaseURL', useValue: baseURL},
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UnauthorizedInterceptor,
    multi: true
  }
],


  bootstrap: [AppComponent]
})
export class AppModule { }
