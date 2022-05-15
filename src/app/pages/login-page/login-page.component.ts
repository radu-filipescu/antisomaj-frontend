import { Component, OnInit } from '@angular/core';
import {LoginDTO} from "./Entities/LoginDTO";
import {AuthService} from "./Services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginDto: LoginDTO = new LoginDTO();
  forgotPasswordMode: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginDto);
  }

}
