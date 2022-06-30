import { Component, OnInit } from '@angular/core';
import {AccountDTO} from "../signup-page/Entities/AccountDTO";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../freelancers-page/service/user.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userId: number = -1;
  userProfile: AccountDTO = new AccountDTO();

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    // get user to be displayed based on route
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];
    });

    // fetch that user
    this.userService.getUserById(this.userId)
      .subscribe( data => {
        this.userProfile = data;
      });

    this.userProfile.firstName = "Prenume";
    this.userProfile.lastName = "Nume";
    this.userProfile.city = "Oras";
    this.userProfile.email = "adresa@email.com";
    this.userProfile.dateOfBirth = new Date();


    this.userProfile.freelancerInfo.accountId = 1;
    this.userProfile.freelancerInfo.cvLink = "linkdesite.com";
    this.userProfile.freelancerInfo.education = "universitate studii";
    this.userProfile.freelancerInfo.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus sapien, sodales vel justo ac, tempus semper tortor. Vivamus posuere aliquam eleifend. Proin pretium, magna eu consequat condimentum, arcu erat viverra nisi, sit amet venenatis velit lectus sit amet lorem. Ut ac fringilla urna, in tristique sem. Quisque feugiat gravida justo in suscipit. Suspendisse convallis odio a elit molestie, a tempor purus rutrum. Cras enim mauris, ultricies sit amet pellentesque quis, rhoncus vitae tortor. Nunc faucibus lacus vitae mi aliquet condimentum. Donec sit amet rutrum nibh."

    this.userProfile.employerInfo.accountId = 1;
    this.userProfile.employerInfo.name = "Nume Firma";
    this.userProfile.employerInfo.description = "Quisque efficitur venenatis scelerisque. Vivamus dolor nulla, luctus a nulla sed, malesuada lacinia neque. Vestibulum neque mauris, elementum non bibendum ac, tempus quis ante. Nam laoreet tortor sed purus rhoncus, nec maximus velit auctor. Suspendisse quis hendrerit ipsum. Etiam vestibulum ligula ex, eu ultricies erat congue et. Proin aliquam libero eu neque pellentesque elementum. Duis nec lorem sit amet enim dignissim sagittis. Nulla ornare ante id justo volutpat pharetra. Proin sed erat orci. Aliquam pellentesque venenatis enim, ac lacinia erat facilisis eget. Nam vitae nunc dignissim, pulvinar justo a, dictum ex. Aenean malesuada scelerisque lorem, vel pharetra purus.";
    this.userProfile.employerInfo.location = "Locatie";

  }

}
