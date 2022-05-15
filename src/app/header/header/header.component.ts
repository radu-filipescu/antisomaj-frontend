import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pages: any = [{ displayName: "Caut de muncă", navigatePath: "/job-search"},
                { displayName: "Caut freelancer", navigatePath: "/freelancer-search"}
               ];


  constructor() { }

  ngOnInit(): void {
  }

}
