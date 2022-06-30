import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JobDTO} from "../Entities/JobDTO";

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  jobsApi: string = "http://localhost:8080/job";

  constructor(private httpService: HttpClient) { }

  getJobs(){
    return this.httpService.get<JobDTO[]>(this.jobsApi + "s");
  }

  addJob(job: JobDTO) {
    this.httpService.post(this.jobsApi, job);
  }
}
