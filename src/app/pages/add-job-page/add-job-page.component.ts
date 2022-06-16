import { Component, OnInit } from '@angular/core';
import {JobsServiceService} from "../jobs-page/service/jobs-service.service";
import {JobDTO} from "../jobs-page/Entities/JobDTO";
import {AuthService} from "../login-page/Services/auth.service";
import {NotificationService} from "../../globalStuff/notifications/notification.service";

@Component({
  selector: 'app-add-job-page',
  templateUrl: './add-job-page.component.html',
  styleUrls: ['./add-job-page.component.css']
})
export class AddJobPageComponent implements OnInit {
  newJob: JobDTO = new JobDTO();
  newKeyword: string = "";

  constructor(private jobService: JobsServiceService,
              private authService: AuthService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  addKeyword() {
    if(this.newKeyword.length > 0) {
      this.newJob.keywords.push(this.newKeyword);
      this.newKeyword = "";
    }
    else {
      this.notificationService.emitNotification("Atenție!", "Cuvântul cheie nu poate fi gol!", true, false);
    }
  }

  addJob() {
    this.newJob.employerId = this.authService.getMyId();
    this.jobService.addJob(this.newJob);
  }

}
