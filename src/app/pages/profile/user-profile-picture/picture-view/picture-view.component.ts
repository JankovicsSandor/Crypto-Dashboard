import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'picture-view',
  templateUrl: './picture-view.component.html',
  styleUrls: ['./picture-view.component.scss']
})
export class PictureViewComponent implements OnInit {
  pictureLocation: string = "";
  @Input()
  set pictureLink(pictureLink: string | null) {
    if (pictureLink != null) {
      this.pictureLocation = pictureLink;
    } else {
      this.pictureLocation = "assets/giphy.gif";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
