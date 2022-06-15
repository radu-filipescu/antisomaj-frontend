import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileListView} from "../data/Profile-List-View";
import {AccountDTO} from "../../signup-page/Entities/AccountDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersApi: string = "https://localhost:8080/users/";

  constructor(private httpService: HttpClient) { }

  getUserById(id: number) {
    return this.httpService.get<AccountDTO>(this.usersApi + id);
  }

  getAllUsers() {
    return this.httpService.get<AccountDTO>(this.usersApi);
  }

  getSubjectList() {
    return this.httpService.get(this.usersApi + '/subjects/');
  }

  getUniList() {
    return this.httpService.get(this.usersApi + '/universities/');
  }

  getAllProfiles() {
    // TODO
  }
}
