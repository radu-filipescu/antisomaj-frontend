import { Component, OnInit, Input } from '@angular/core';
import { JobDTO } from '../pages/jobs-page/Entities/JobDTO';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: JobDTO = new JobDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
