import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancers-page',
  templateUrl: './freelancers-page.component.html',
  styleUrls: ['./freelancers-page.component.css']
})
export class FreelancersPageComponent implements OnInit {
  searchString: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
