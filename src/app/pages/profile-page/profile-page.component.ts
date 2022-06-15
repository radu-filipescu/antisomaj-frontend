import { Component, OnInit } from '@angular/core';
import {AccountDTO} from "../signup-page/Entities/AccountDTO";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userProfile: AccountDTO = new AccountDTO();

  constructor() { }

  ngOnInit(): void {
    // TODO fetch current user (maybe auth-service?)

    this.userProfile.firstName = "Dragan";
    this.userProfile.lastName = "Mihaita";
    this.userProfile.city = "Balotesti";
    this.userProfile.email = "sobelelesti@mata.com";
    this.userProfile.dateOfBirth = new Date();
  }

}
