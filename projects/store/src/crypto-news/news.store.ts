import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CryptoAssetNewsStore } from '@shared';

function createInitialState(): CryptoAssetNewsStore {
  return new CryptoAssetNewsStore();
}

@Injectable()
@StoreConfig({ name: 'news' })
export class NewsStore extends Store<CryptoAssetNewsStore> {

  constructor() {
    super(createInitialState());
  }

}
