import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpClientService } from 'src/app/base-client/base-http-client.service';
import { CryptoDataService } from 'src/app/store/crypto-data/crypto-data.service';
import { CryptoResponse } from '../../../../models/crypto-response';

@Injectable()
export class CryptoDataProviderService {
  constructor(private http: BaseHttpClientService, private cryptoDataStore: CryptoDataService) { }


  refreshList() {
    this.http.get<CryptoResponse>("coinmarket/latest").subscribe((val) => {
      this.cryptoDataStore.setCryptoData(val);
    });
  }
}
