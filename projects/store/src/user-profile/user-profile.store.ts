import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { UserProfile } from '@shared';

function createInitialState(): UserProfile {
  let actualProfile: UserProfile = new UserProfile();
  actualProfile.name = "Rózsahegyi Zsanett";
  actualProfile.profilePicture = "https://media-exp1.licdn.com/dms/image/C4D03AQFZ6l7f80PItw/profile-displayphoto-shrink_200_200/0/1606568444323?e=1617235200&v=beta&t=jr759MzE0U7Gsjc5RyXGfF9kaLogwOcq9n_S8-scoCw"

  return actualProfile;
}

@Injectable()
@StoreConfig({ name: 'user-profile' })
export class UserProfileStore extends Store<UserProfile> {

  constructor() {
    super(createInitialState());
  }

}
