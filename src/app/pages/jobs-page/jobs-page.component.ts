import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from 'src/app/job-card/job-card.component';
import { FilterModel } from './Entities/FilterModel';
import { JobDTO } from './Entities/JobDTO';
import { JobsServiceService } from './service/jobs-service.service';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit {

  jobMock: JobDTO = new JobDTO;
  jobs: JobDTO[] = [];
  jobsFiltered: JobDTO[] = []
  filters: FilterModel = new FilterModel(); // cand folosesc din range inmultesc cu 100 inainte
  categories: string[] = [];
  categorySuggestions: string[] = []
  categoriesMock: string[] = ["IT", "Design"];

  constructor(private jobsService: JobsServiceService) { }

  ngOnInit(): void {
    //this.loadData();
    this.loadMockData();
  }

  loadMockData(): void{
    this.jobMock.name = "Nume proiect";
    this.jobMock.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi neque, ultrices quis posuere in, egestas nec mauris. Etiam quis nisl ornare, cursus ligula ac, tristique ante. Cras semper, magna vel porttitor mattis, ligula dolor ultrices velit, vitae sagittis dolor urna sit amet nibh. Aenean in nisi purus";
    this.jobMock.salary = 5;
    this.jobMock.keywords = ["sapa", "gradina", "proiect"];
    this.jobMock.category = "IT";
    this.jobMock.minimumExperience = 3;

    this.jobs = [this.jobMock, this.jobMock, this.jobMock];
    this.jobsFiltered = this.jobs;
    this.categories = this.categoriesMock;
  }

  loadData(): void{
    this.jobsService.getJobs()
    .subscribe(data => {
      this.jobs = data as JobDTO[];
    });
  }

  searchCategories(input: any) {
    let suggestions: string[] = []

    if(input.query.length == 0 || input.query[0] == '*') {
      suggestions = [...this.categories];
    }
    else {
      for (let i = 0; i < this.categories.length; i++)
        if (this.categories[i].toLowerCase().includes(input.query.toLowerCase()))
          suggestions.push(this.categories[i]);
    }

    suggestions.push("toate");

    this.categorySuggestions = suggestions;
  }

  filter(){
    this.jobsFiltered = []
    for(let job of this.jobs){
      if(job.minimumExperience <= this.filters.minimumExperience && 
        (job.category.includes(this.filters.category) || this.filters.category == "toate") && 
        job.salary >= this.filters.payRangeValues[0] * 100 && job.salary <= this.filters.payRangeValues[1] * 100){
        this.jobsFiltered.push(job);
      }
    }
  }

}
