import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CryptoItem } from '@shared';
import { Observable } from 'rxjs';
import { SelectedAssetStore } from './selected-asset.store';

@Injectable()
export class SelectedAssetQuery extends Query<CryptoItem> {

  constructor(protected store: SelectedAssetStore) {
    super(store);
  }

  getSelectedCryptoItem(): Observable<CryptoItem> {
    return this.select();
  }

}
