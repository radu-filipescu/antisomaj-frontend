import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobDTO } from '../jobs-page/Entities/JobDTO';
import { JobsServiceService } from '../jobs-page/service/jobs-service.service';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {

  jobId: number = -1;
  job: JobDTO = new JobDTO();

  constructor(
    private route: ActivatedRoute,
    private jobService: JobsServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {this.jobId = params['id']});

    this.jobService.getJobById(this.jobId).subscribe(data => {this.job = data;});

    this.job.name = "Dat cu sapa original";
    this.job.description ="bag pula in slobozia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper tortor sit amet consectetur porta. Integer nec semper ipsum. Nunc placerat sapien ut consectetur commodo. Etiam vitae malesuada sapien. Sed efficitur augue vel erat fringilla, et accumsan augue pulvinar. Ut laoreet felis id massa efficitur, vitae malesuada nisl feugiat. Etiam a commodo velit. Nulla facilisi. Curabitur dignissim leo malesuada, congue dolor vitae, blandit elit. Sed luctus magna id cursus consequat. Phasellus pharetra ullamcorper orci vel facilisis. Quisque ac pretium nulla, ut fringilla enim. Integer augue dolor, egestas quis elementum ac, accumsan eget nunc. Quisque fringilla ex quam, a pulvinar erat rhoncus ac.";
    this.job.category = "IT";
    this.job.salary = 5;
    this.job.minimumExperience = 3;
    this.job.keywords = ["ceva", "altceva"];
  }

}
