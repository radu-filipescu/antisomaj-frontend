import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BugReportService {
  apiUrl: string = "http://localhost:8080";

  constructor( private httpClient: HttpClient ) { }

  sendBug(bugContent: string) {
    let bugDTO: any = {};

    bugDTO["bug"] = bugContent;

    this.httpClient.post(this.apiUrl + '/bugReport', bugDTO)
      .subscribe( data => {
        console.log(data);
      })
  }
}
