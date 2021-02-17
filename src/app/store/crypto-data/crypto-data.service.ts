import { Injectable } from '@angular/core';
import { CryptoItem, CryptoResponse } from 'src/app/models/crypto-response';
import { CryptoDataStore } from './crypto-data.store';

@Injectable()
export class CryptoDataService {

  constructor(private cryptoDataStore: CryptoDataStore) { }

  setCryptoData(cryptoData: CryptoResponse) {
    this.cryptoDataStore.update(cryptoData);
  }
}
