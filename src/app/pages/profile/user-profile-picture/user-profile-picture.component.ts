import { Component, OnInit } from '@angular/core';
import { UserProfileQuery } from '@store';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfileDataService } from '../services/user-profile-data.service';

@Component({
  selector: 'user-profile-picture',
  templateUrl: './user-profile-picture.component.html',
  styleUrls: ['./user-profile-picture.component.scss']
})
export class UserProfilePictureComponent implements OnInit {
  pictureLink: ReplaySubject<string> = new ReplaySubject()

  constructor(public userData: UserProfileDataService) { }

  ngOnInit(): void {
    this.userData.getUserData$().pipe(map((val) => val.pictureLink)).subscribe(this.pictureLink);
  }

}
