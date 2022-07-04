import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginDTO} from "../Entities/LoginDTO";
import {NotificationService} from "../../../globalStuff/notifications/notification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "http://localhost:8080";
  @Output() authStatus = new EventEmitter<void>();

  constructor(private httpClient: HttpClient,
              private notificationService: NotificationService) {}

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  login(credentials: LoginDTO) {
    let body = new URLSearchParams();
    body.set('email', credentials.email);
    body.set('password', credentials.password);

    this.httpClient.post(this.apiUrl + "/login", body.toString(), this.options)
      .subscribe(
        response => {
          localStorage.setItem('auth-token', response.toString());
          console.log(response);

          //TODO
          localStorage.setItem('user-id', "15");

          this.authStatus.emit();
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
    let token = this.getToken();

    if(!token)
      return false;

    // checks the token exp date
    //const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    //if(Math.floor((new Date).getTime() / 1000) >= expiry) return false;

    return true;
  }

  logout() {
    localStorage.removeItem('auth-token');
    this.authStatus.emit();
  }
}
