import {Component, Input, OnInit, Sanitizer} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ProfileListView} from "../data/Profile-List-View";

@Component({
  selector: 'app-profile-list-view',
  templateUrl: './profile-list-view.component.html',
  styleUrls: ['./profile-list-view.component.css']
})
export class ProfileListViewComponent implements OnInit {
  @Input() userProfile: ProfileListView = new ProfileListView();
  thumbnail: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if(this.userProfile.userImage) {
      let objectURL = 'data:image/jpeg;base64,' + this.userProfile.userImage;
      this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
  }

}
