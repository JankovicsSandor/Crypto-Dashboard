import { Component, OnInit } from '@angular/core';
import { NewsQuery } from '@store';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(public newsQuery: NewsQuery) { }

  ngOnInit(): void {
  }

}
