import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JobDTO} from "../Entities/JobDTO";

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  jobsApi: string = "https://localhost:8080/jobs";

  constructor(private httpService: HttpClient) { }

  getJobs(){
    return this.httpService.get<JobDTO>(this.jobsApi);
  }

  addJob(job: JobDTO) {
    this.httpService.post(this.jobsApi, job);
  }
}
