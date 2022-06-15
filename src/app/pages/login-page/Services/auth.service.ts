import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDTO} from "../Entities/LoginDTO";
import {NotificationService} from "../../../globalStuff/notifications/notification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "placeholder/api/";

  constructor(private httpClient: HttpClient,
              private notificationService: NotificationService) {}

  login(credentials: LoginDTO) {
    this.httpClient.post("apiUrl" + "/login", credentials)
      .subscribe(
        response => {
          localStorage.setItem('auth-token', response.toString());

          //TODO
          localStorage.setItem('user-id', "15");
        },
        error => {
          this.notificationService.emitNotification("Eroare la intrarea în cont", error.message, true, false);
        }
      );
  }

  getToken() {
    return localStorage.getItem('auth-token');
  }

  getMyId() {
    //TODO
    return 1;

    //return localStorage.getItem('user-id');
  }

  isLogged() {
    // TODO developing
    // let token = this.getToken();
    //
    // if(!token)
    //   return false;
    //
    // // checks the token exp date
    // const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    // if(Math.floor((new Date).getTime() / 1000) >= expiry) return false;

    return true;
  }

  logout() {
    localStorage.removeItem('auth-token');
  }
}
