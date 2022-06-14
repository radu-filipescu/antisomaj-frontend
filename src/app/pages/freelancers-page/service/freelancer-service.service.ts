import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileListView} from "../data/Profile-List-View";

@Injectable({
  providedIn: 'root'
})
export class FreelancerServiceService {
  freelancerApi: string = "https://localhost:8080/freelancers/";

  constructor(private httpService: HttpClient) { }

  getSubjectList() {
    return this.httpService.get(this.freelancerApi + '/subjects/');
  }

  getUniList() {
    return this.httpService.get(this.freelancerApi + '/universities/');
  }

  getAllProfiles() {
    // TODO
  }
}
