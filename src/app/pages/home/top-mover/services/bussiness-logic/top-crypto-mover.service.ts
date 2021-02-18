import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators"
import { CryptoItem } from 'projects/shared/src/api-response/crypto-response';
import { CryptoDataQuery } from '@store';

@Injectable()
export class TopCryptoMoverService {
  topMover: ReplaySubject<CryptoItem[]> = new ReplaySubject();

  constructor(private cryptoQuery: CryptoDataQuery) {
    this.cryptoQuery.getAllCryptoData().pipe(map((value) => {
      let topMovers: CryptoItem[] = [];
      let responseCopy = [...value.data];
      let sorted = responseCopy.sort((a, b) => (a.quote.usd.percent_change_24h < b.quote.usd.percent_change_24h) ? 1 : ((b.quote.usd.percent_change_24h < a.quote.usd.percent_change_24h) ? -1 : 0))
      topMovers = topMovers.concat(sorted.slice(0, 3));
      topMovers = topMovers.concat(sorted.slice(sorted.length - 3, sorted.length - 1));
      return topMovers;
    })).subscribe(this.topMover);
  }

  getAllTopMover$() {
    return this.topMover.asObservable();
  }


}
