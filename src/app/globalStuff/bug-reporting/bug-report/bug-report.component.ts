import { Component, OnInit } from '@angular/core';
import { NotificationService } from "../../notifications/notification.service";

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.css']
})
export class BugReportComponent implements OnInit {
  opened: boolean = true;
  bugContent: string = "";

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  sendBugReport() {
    this.notificationService.emitNotification("Raportul tău a fost trimis!", "Ne cerem scuze dacă ai întâmpinat " +
      "vreo inconveniență folosind platforma noastră. " +
      "Vom face tot posibilul pentru a remedia cât mai rapid această problemă,", false, true);
  }
}
