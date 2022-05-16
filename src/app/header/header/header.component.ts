import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../pages/login-page/Services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  pages: any = [{ displayName: "Caut de muncă", navigatePath: "/job-search"},
                { displayName: "Caut freelancer", navigatePath: "/freelancer-search"}
               ];


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLogged();
  }

}
