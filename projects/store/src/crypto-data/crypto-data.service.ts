import { Injectable } from '@angular/core';
import { CryptoItem, CryptoResponse } from 'projects/shared/src/api-response/crypto-response';
import { CryptoDataStore } from './crypto-data.store';

@Injectable()
export class CryptoDataService {

  constructor(private cryptoDataStore: CryptoDataStore) { }

  setCryptoData(cryptoData: CryptoResponse) {
    this.cryptoDataStore.update(cryptoData);
  }
}
