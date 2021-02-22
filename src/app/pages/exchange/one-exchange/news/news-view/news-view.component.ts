import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CryptoAssetNews, CryptoAssetNewsStore } from '@shared';

@Component({
  selector: 'news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsViewComponent implements OnInit {
  articleList: CryptoAssetNews[] = [];

  @Input() set newsData(articles: CryptoAssetNewsStore | null) {
    if (articles != null) {
      this.articleList = articles.newsList;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
