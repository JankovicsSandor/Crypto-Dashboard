import { SelectedAssetService } from './../../../store/src/selected-asset/selected-asset.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptoResponse } from '@shared';
import { CryptoDataService } from '@store';
import { BaseHttpClientService } from '../base-client/base-http-client.service';
import { CryptoItem } from "@shared"

@Injectable()
export class CryptoDataProviderService {
  constructor(private http: BaseHttpClientService, private cryptoDataStore: CryptoDataService, private selectedAssetService: SelectedAssetService) { }

  refreshList() {
    this.http.get<CryptoResponse>("coinmarket/latest").subscribe((val) => {
      this.cryptoDataStore.setCryptoData(val);
    });
  }

  getOneCryptoData(assetId: number) {
    this.http.get<CryptoItem>(`asset/${assetId}`).subscribe((asset) => {
      this.selectedAssetService.setSelectedCryptoItem(asset);
    })
  }
}
