import {Component, Input, OnInit, Sanitizer} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ProfileListView} from "../data/Profile-List-View";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-list-view',
  templateUrl: './profile-list-view.component.html',
  styleUrls: ['./profile-list-view.component.css']
})
export class ProfileListViewComponent implements OnInit {
  @Input() userProfile: ProfileListView = new ProfileListView();
  thumbnail: any;

  constructor(private sanitizer: DomSanitizer,
              private router: Router) { }

  ngOnInit(): void {
    if(this.userProfile.userImage) {
      let objectURL = 'data:image/jpeg;base64,' + this.userProfile.userImage;
      this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
  }

  navigateToProfile(profileId: number) {
    this.router.navigate(['/user-profile', profileId]);
  }

}
