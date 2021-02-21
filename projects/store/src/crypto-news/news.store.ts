import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CryptoAssetNews, CryptoAssetStore } from '@shared';

function createInitialState(): CryptoAssetStore {
  return new CryptoAssetStore();
}

@Injectable()
@StoreConfig({ name: 'news' })
export class NewsStore extends Store<CryptoAssetStore> {

  constructor() {
    super(createInitialState());
  }

}
