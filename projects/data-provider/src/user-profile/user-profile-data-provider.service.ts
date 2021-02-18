
import { Injectable } from '@angular/core';
import { UserProfileData } from '@shared';
import { of } from 'rxjs';
import { BaseHttpClientService } from '../base-client/base-http-client.service';

@Injectable()
export class UserProfileDataProviderService {

  constructor(private http: BaseHttpClientService) { }

  getProfileData() {
    return of<UserProfileData>(<UserProfileData>{
      birthDay: new Date(),
      city: "Budapest",
      country: "Hungary",
      email: "alma@alma.com",
      name: "Rózsahegyi Zsanett",
      pictureLink: "https://media-exp1.licdn.com/dms/image/C4D03AQFZ6l7f80PItw/profile-displayphoto-shrink_200_200/0/1606568444323?e=1617235200&v=beta&t=jr759MzE0U7Gsjc5RyXGfF9kaLogwOcq9n_S8-scoCw",
      postCode: "1178",
      street: "Gödel uca",
      unit: "45"
    })
    //return this.http.get<UserProfileData>("profile/me");
  }
}
