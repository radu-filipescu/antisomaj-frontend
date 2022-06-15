import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from 'primeng/calendar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule } from "@angular/forms";
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AutoCompleteModule} from "primeng/autocomplete";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InputSwitchModule} from "primeng/inputswitch";
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { JobCardComponent } from './job-card/job-card.component';
import {SliderModule} from 'primeng/slider';
import { NotificationsComponent } from './globalStuff/notifications/notifications/notifications.component';
import {JwtInterceptor} from "./globalStuff/interceptors/jwt.interceptor";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {faArrowCircleLeft, faFilm, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BugReportComponent } from './globalStuff/bug-reporting/bug-report/bug-report.component';
import {TooltipModule} from "primeng/tooltip";
import {InputTextareaModule} from "primeng/inputtextarea";
import { FreelancersPageComponent } from './pages/freelancers-page/freelancers-page.component';
import { ProfileListViewComponent } from './pages/freelancers-page/profile-list-view/profile-list-view.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { TextTrimmerPipe } from './globalStuff/text-trimmer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginPageComponent,
    SignupPageComponent,
    NotificationsComponent,
    BugReportComponent,
    JobsPageComponent,
    JobCardComponent,
    NotificationsComponent,
    FreelancersPageComponent,
    ProfileListViewComponent,
    ProfilePageComponent,
    TextTrimmerPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    AutoCompleteModule,
    HttpClientModule,
    InputSwitchModule,
    SliderModule,
    FontAwesomeModule,
    TooltipModule,
    InputTextareaModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
