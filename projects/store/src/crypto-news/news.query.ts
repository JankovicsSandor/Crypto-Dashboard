import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { NewsStore, NewsState } from './news.store';

@Injectable({ providedIn: 'root' })
export class NewsQuery extends Query<NewsState> {

  constructor(protected store: NewsStore) {
    super(store);
  }

}
