import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptoResponse } from '@shared';
import { CryptoDataService } from '@store';
import { BaseHttpClientService } from '../base-client/base-http-client.service';


@Injectable()
export class CryptoDataProviderService {
  constructor(private http: BaseHttpClientService, private cryptoDataStore: CryptoDataService) { }

  refreshList() {
    this.http.get<CryptoResponse>("coinmarket/latest").subscribe((val) => {
      this.cryptoDataStore.setCryptoData(val);
    });
  }
}
