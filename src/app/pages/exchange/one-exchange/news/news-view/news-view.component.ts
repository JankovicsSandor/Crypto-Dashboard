import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CryptoAssetNews, CryptoAssetStore } from '@shared';

@Component({
  selector: 'news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsViewComponent implements OnInit {
  articleList: CryptoAssetNews[] = [];

  @Input() set newsData(articles: CryptoAssetStore | null) {
    if (articles != null) {
      this.articleList = articles.newsList;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
