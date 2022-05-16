import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from 'src/app/job-card/job-card.component';
import { FilterModel } from './Entities/FilterModel';
import { JobDTO } from './Entities/JobDTO';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit {

  jobMock: JobDTO = new JobDTO;
  jobs: JobDTO[] = [];
  filters: FilterModel = new FilterModel();
  categories: string[] = [];
  categoriesMock: string[] = ["Programare", "Design", "Muncit cu ziua"];

  constructor() { }

  ngOnInit(): void {
    this.loadMockData();
  }

  loadMockData(): void{
    this.jobMock.name = "Proiect renovare gradina";
    this.jobMock.description = "Am nevoie de un om sa dea cu sapa la gradinaLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi neque, ultrices quis posuere in, egestas nec mauris. Etiam quis nisl ornare, cursus ligula ac, tristique ante. Cras semper, magna vel porttitor mattis, ligula dolor ultrices velit, vitae sagittis dolor urna sit amet nibh. Aenean in nisi purus";
    this.jobMock.salary = 5;
    this.jobMock.keywords = ["sapa", "gradina", "proiect"];
    this.jobMock.category = "Muncit cu ziua";

    this.jobs = [this.jobMock, this.jobMock, this.jobMock];
    this.categories = this.categoriesMock;
  }

}
