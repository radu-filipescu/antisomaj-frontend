import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JobDTO } from '../pages/jobs-page/Entities/JobDTO';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: JobDTO = new JobDTO;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToJob(jobId: number) {
    this.router.navigate(['/job', jobId]);
  }

}
