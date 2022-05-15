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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginPageComponent,
    SignupPageComponent,
    JobsPageComponent,
    JobCardComponent,
    NotificationsComponent
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
        SliderModule
        InputSwitchModule,
        FontAwesomeModule
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
