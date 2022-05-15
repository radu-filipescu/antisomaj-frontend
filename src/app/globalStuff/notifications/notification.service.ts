import {EventEmitter, Injectable} from '@angular/core';
import {NotificationObject} from "./Entities/Notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationEmitter: EventEmitter<NotificationObject> = new EventEmitter<NotificationObject>();

  constructor() { }

  emitNotification(title: string, message: string, isError: boolean, isGood: boolean) {
    let newNotification = new NotificationObject();

    newNotification.title = title;
    newNotification.message = message;
    newNotification.isError = isError;
    newNotification.isSuccess = isGood;
    this.notificationEmitter.emit(newNotification);
  }
}
