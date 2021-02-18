import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserProfileDataProviderService } from '@data-provider';
import { UserProfileData } from '@shared';

@Injectable()
export class UserProfileDataService {
  userData$: ReplaySubject<UserProfileData> = new ReplaySubject();


  constructor(private userDataProvider: UserProfileDataProviderService) {
    this.refreshUserData();
  }

  getUserData$() {
    return this.userData$.asObservable();
  }

  refreshUserData() {
    this.userDataProvider.getProfileData().subscribe(this.userData$)
  }
}
