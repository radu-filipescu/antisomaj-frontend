import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../pages/login-page/Services/auth.service";
import {Router} from "@angular/router";

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


  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLogged();
  }

  navigateToOwnProfile() {
    let myId = this.authService.getMyId();
    this.router.navigate(['/user-profile', myId]);
  }

  goToTop(element: HTMLElement) {
    //while(this.router.url != '/') {
    //}
    element.scrollIntoView({behavior: 'smooth'})
  }

  logout() {
    this.authService.logout();
  }
}
