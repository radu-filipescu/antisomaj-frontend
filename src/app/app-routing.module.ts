import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignupPageComponent} from "./pages/signup-page/signup-page.component";
import {HOME} from "@angular/cdk/keycodes";
import {FreelancersPageComponent} from "./pages/freelancers-page/freelancers-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {AddJobPageComponent} from "./pages/add-job-page/add-job-page.component";
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'job-search', component: JobsPageComponent },
  { path: 'freelancer-search', component: FreelancersPageComponent },
  { path: 'user-profile/:id', component: ProfilePageComponent },
  { path: 'add-job', component: AddJobPageComponent },
  { path: 'job/:id', component: JobDetailsPageComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
