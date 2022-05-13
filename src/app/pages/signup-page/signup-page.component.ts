import { Component, OnInit } from '@angular/core';
import {AccountDTO} from "./Entities/AccountDTO";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  newAccount: AccountDTO = new AccountDTO();

  constructor() { }

  ngOnInit(): void {
  }

}
