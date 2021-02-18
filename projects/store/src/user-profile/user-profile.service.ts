import { Injectable } from '@angular/core';
import { UserProfile } from '@shared';
import { UserProfileStore } from './user-profile.store';

@Injectable()
export class UserProfileService {

  constructor(private userStore: UserProfileStore) { }

  setUserData(accessToken: string, refreshToken: string) {
    // TODO decode jwt and set userdata
    console.log(accessToken, refreshToken);
  }
}
