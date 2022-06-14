import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  jobsApi: string = "https://localhost:8080/jobs"

  constructor(private httpService: HttpClient) { }

  getJobs(){
    return this.httpService.get(this.jobsApi)
  }
}
