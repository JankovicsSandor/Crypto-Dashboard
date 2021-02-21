import { Injectable } from '@angular/core';
import { CryptoAssetNews, CryptoAssetStore } from '@shared';
import { NewsStore } from './news.store';

@Injectable()
export class NewsService {

  constructor(private newsStore: NewsStore) { }

  setNews(articles: CryptoAssetNews[]) {

    this.newsStore.update(<CryptoAssetStore>{ newsList: articles });
  }
}
