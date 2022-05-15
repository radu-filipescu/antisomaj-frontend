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
import { NotificationsComponent } from './globalStuff/notifications/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginPageComponent,
    SignupPageComponent,
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
        InputSwitchModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
