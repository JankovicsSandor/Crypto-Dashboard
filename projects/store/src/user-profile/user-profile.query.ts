import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserProfile } from '@shared';
import { UserProfileStore, } from './user-profile.store';

@Injectable()
export class UserProfileQuery extends Query<UserProfile> {

  constructor(protected store: UserProfileStore) {
    super(store);
  }

  getUserData() {
    return this.select();
  }

}
