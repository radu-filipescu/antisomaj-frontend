import { Component, OnInit } from '@angular/core';
import {NotificationObject} from "../Entities/Notification";
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notification: NotificationObject | null = null;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notificationEmitter.subscribe(
      data => {
        this.notification = data;
        setTimeout( () => this.notification = null, 2500);
      }
    );
  }

}
