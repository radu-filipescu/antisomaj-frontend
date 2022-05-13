import { Component, OnInit } from '@angular/core';
import {LoginDTO} from "./Entities/LoginDTO";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginDto: LoginDTO = new LoginDTO();

  constructor() { }

  ngOnInit(): void {
  }

}
