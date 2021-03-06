import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CryptoResponse } from 'projects/shared/src/api-response/crypto-response';

function createInitialState(): CryptoResponse {
  return new CryptoResponse();
}

@Injectable()
@StoreConfig({ name: 'crypto-data' })
export class CryptoDataStore extends Store<CryptoResponse> {

  constructor() {
    super(createInitialState());
  }

}
