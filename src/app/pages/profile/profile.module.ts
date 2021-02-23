import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserProfilePictureComponent } from './user-profile-picture/user-profile-picture.component';
import { MatCardModule } from '@angular/material/card';
import { UserProfileDataService } from './services/user-profile-data.service';
import { PictureViewComponent } from './user-profile-picture/picture-view/picture-view.component';
import { MatButtonModule } from '@angular/material/button';
import { PersonalDetailsModule } from './personal-details/personal-details.module';


@NgModule({
  declarations: [ProfileComponent, UserProfilePictureComponent, PictureViewComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PersonalDetailsModule
  ],
  providers: [UserProfileDataService]
})
export class ProfileModule { }
