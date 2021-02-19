import { Injectable } from '@angular/core';
import { CryptoItem } from '@shared';
import { SelectedAssetStore } from './selected-asset.store';

@Injectable()
export class SelectedAssetService {

  constructor(private selectedAsset: SelectedAssetStore) { }

  setSelectedCryptoItem(item: CryptoItem) {
    this.selectedAsset.update(item);
  }
}
