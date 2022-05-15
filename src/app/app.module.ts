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
import {HttpClientModule} from "@angular/common/http";
import {InputSwitchModule} from "primeng/inputswitch";
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { JobCardComponent } from './job-card/job-card.component';
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginPageComponent,
    SignupPageComponent,
    JobsPageComponent,
    JobCardComponent
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
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
