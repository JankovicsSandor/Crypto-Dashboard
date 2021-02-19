import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CryptoItem } from '@shared';

function createInitialState(): CryptoItem {
  return new CryptoItem();
}

@Injectable()
@StoreConfig({ name: 'selected-asset' })
export class SelectedAssetStore extends Store<CryptoItem> {

  constructor() {
    super(createInitialState());
  }

}
