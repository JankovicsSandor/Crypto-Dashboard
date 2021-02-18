import { Component } from '@angular/core';
import { UserProfileQuery } from '@store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public userQuery: UserProfileQuery) {
  }
}
