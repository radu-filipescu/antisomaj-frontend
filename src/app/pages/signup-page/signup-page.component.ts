import { Component, OnInit } from '@angular/core';
import {AccountDTO} from "./Entities/AccountDTO";
import {HttpClient} from "@angular/common/http";
import {NotificationService} from "../../globalStuff/notifications/notification.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  citiesInRo: string[] = [];
  filteredCities: string[] = [];
  newAccount: AccountDTO = new AccountDTO();
  freelancerAccount: boolean = false;
  employerAccount: boolean = false;

  constructor(private httpClient: HttpClient,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    this.httpClient.get('./assets/text/citiesInRomania.txt', { responseType: 'text' })
      .subscribe(
        data => {
              let splitString: string[] = data.split("\n");
              for(var i = 0; i < splitString.length; i++) {
                splitString[i] = splitString[i].slice(0, -1);
                this.citiesInRo.push(splitString[i]);
              }
        }
      );
  }

  searchCity(event: any) {
    let searchWord: string = event.query.toLowerCase();
    this.filteredCities = [];
    for(var i = 0; i < this.citiesInRo.length; i++) {
      let wordWithoutDiacritics: string = this.citiesInRo[i].toLowerCase();
      wordWithoutDiacritics = wordWithoutDiacritics.replace('ă','a');
      wordWithoutDiacritics = wordWithoutDiacritics.replace('ț','t');
      wordWithoutDiacritics = wordWithoutDiacritics.replace('ș','s');
      wordWithoutDiacritics = wordWithoutDiacritics.replace('â','a');
      wordWithoutDiacritics = wordWithoutDiacritics.replace('î','i');

      if(wordWithoutDiacritics.indexOf(searchWord) !== -1 || this.citiesInRo[i].toLowerCase().indexOf(searchWord) !== -1)
        this.filteredCities.push(this.citiesInRo[i]);
    }
  }

  checkIfValid() {

  }

  createAccount() {
    this.notificationService.emitNotification("test", "cont creat cu success", true, false);
  }
}
