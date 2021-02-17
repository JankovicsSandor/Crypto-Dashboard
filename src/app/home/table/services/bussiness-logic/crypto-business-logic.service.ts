import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CryptoResponse } from '../../models/crypto-response';
import { CryptoDataProviderService } from '../data-provider/crypto-data-provider.service';

@Injectable()
export class CryptoBusinessLogicService {
  private cryptoList: BehaviorSubject<CryptoResponse> = new BehaviorSubject(new CryptoResponse());
  constructor(private dataProvider: CryptoDataProviderService) {
    this.dataProvider.refreshList().subscribe((value) => {
      this.cryptoList.next(value);
    });
  }

  getCryptoList$(): Observable<CryptoResponse> {
    return this.cryptoList.asObservable();
  }
}
