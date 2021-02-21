import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CryptoAssetStore } from '@shared';
import { NewsStore } from './news.store';

@Injectable()
export class NewsQuery extends Query<CryptoAssetStore> {

  constructor(protected store: NewsStore) {
    super(store);
  }

  getAllNewsForAsset() {
    return this.select();
  }

}
