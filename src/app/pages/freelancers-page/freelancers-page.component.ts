import { Component, OnInit } from '@angular/core';
import {ProfileListView} from "./data/Profile-List-View";
import {FreelancerServiceService} from "./service/freelancer-service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-freelancers-page',
  templateUrl: './freelancers-page.component.html',
  styleUrls: ['./freelancers-page.component.css']
})
export class FreelancersPageComponent implements OnInit {
  freelancerList: ProfileListView[] = [new ProfileListView(), new ProfileListView(), new ProfileListView(), new ProfileListView()]
  visibleList: ProfileListView[] = []

  // filtering stuff
  profileName: string = "";

  subject: string = "";
  subjectSuggestions: string[] = [];
  subjectList: string[] = ["matematica","informatica","biologie","sex","mecanica","cryptomonede","arges"];

  university: string = "";
  uniSuggestions: string[] = [];
  uniList: string[] = ["FMI UNIBUC","UBB CLUJ","CUZA IASI","romano americana","sex"];

  city: string = "";
  citySuggestions: string[] = [];
  cityList: string[] = [];

  constructor(private freelancerService: FreelancerServiceService,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('./assets/text/citiesInRomania.txt', { responseType: 'text' })
      .subscribe(
        data => {
          let splitString: string[] = data.split("\n");
          for(var i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].slice(0, -1);
            this.cityList.push(splitString[i]);
          }
        }
      );

    // this.freelancerService.getProfiles()
    //   .subscribe(data => {
    //     this.freelancerList = data as ProfileListView[];
    //   });

      this.visibleList = this.freelancerList;
    // this.freelancerService.getSubjectList()
    //   .subscribe(data => {
    //     this.subjectList = data as string[];
    //   });
    //
    // this.freelancerService.getUniList()
    //   .subscribe(data => {
    //     this.subjectList = data as string[];
    //   });
  }

  searchSubjects(input: any) {
    this.subjectSuggestions = [];

    if(input.query.length == 0 || input.query[0] == '*') {
      this.subjectSuggestions = this.subjectList;
    }
    else {
      for (let i = 0; i < this.subjectList.length; i++)
        if (this.subjectList[i].toLowerCase().includes(input.query.toLowerCase()))
          this.subjectSuggestions.push(this.subjectList[i]);
    }

    this.subjectSuggestions.push("toate");
  }

  searchUnis(input: any) {
    this.uniSuggestions = [];

    if(input.query.length == 0 || input.query[0] == '*') {
      this.uniSuggestions = this.uniList;
    }
    else {
      for (let i = 0; i < this.uniList.length; i++)
        if (this.uniList[i].toLowerCase().includes(input.query.toLowerCase()))
          this.uniSuggestions.push(this.uniList[i]);
    }

    this.uniSuggestions.push("toate");
  }

  searchCity(input: any) {
    this.citySuggestions = [];
    if(input.query.length == 0 || input.query[0] == '*') {
      this.uniSuggestions = this.uniList;
    }
    else {
      let searchWord: string = input.query.toLowerCase();

      for (var i = 0; i < this.cityList.length; i++) {
        let wordWithoutDiacritics: string = this.cityList[i].toLowerCase();
        wordWithoutDiacritics = wordWithoutDiacritics.replace('ă', 'a');
        wordWithoutDiacritics = wordWithoutDiacritics.replace('ț', 't');
        wordWithoutDiacritics = wordWithoutDiacritics.replace('ș', 's');
        wordWithoutDiacritics = wordWithoutDiacritics.replace('â', 'a');
        wordWithoutDiacritics = wordWithoutDiacritics.replace('î', 'i');

        if (wordWithoutDiacritics.indexOf(searchWord) !== -1 || this.cityList[i].toLowerCase().indexOf(searchWord) !== -1)
          this.citySuggestions.push(this.cityList[i]);
      }
    }
    this.uniSuggestions.push("toate");
  }

  filterByName() {
    if(this.profileName.length < 1) {
      this.visibleList = this.freelancerList;
    }
    else {
      this.visibleList = [];
      for(let i = 0; i < this.freelancerList.length; i++)
        if(this.freelancerList[i].userName.toLowerCase().includes(this.profileName.toLowerCase()))
          this.visibleList.push(this.freelancerList[i]);
    }
  }

}
