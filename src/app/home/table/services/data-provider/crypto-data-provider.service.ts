import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptoDataService } from 'src/app/store/crypto-data/crypto-data.service';
import { CryptoResponse } from '../../../../models/crypto-response';

@Injectable()
export class CryptoDataProviderService {
  constructor(private http: HttpClient, private cryptoDataStore: CryptoDataService) { }


  refreshList() {
    this.http.get<CryptoResponse>("https://localhost:44323/coinmarket/latest").subscribe((val) => {
      this.cryptoDataStore.setCryptoData(val);
    });
  }
}
