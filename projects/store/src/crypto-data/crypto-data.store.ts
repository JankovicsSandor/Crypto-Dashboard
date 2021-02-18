import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CryptoItem, CryptoResponse } from 'projects/shared/src/api-response/crypto-response';

export function createInitialState(): CryptoResponse {
  return new CryptoResponse();
}

@Injectable()
@StoreConfig({ name: 'crypto-data' })
export class CryptoDataStore extends Store<CryptoResponse> {

  constructor() {
    super(createInitialState());
  }

}
