import { BaseHttpClientService } from './../base-client/base-http-client.service';
import { Injectable } from '@angular/core';
import { TransactionHistoryService } from '@store';
import { TransactionHistory } from '@shared';

@Injectable()
export class TransactionHistoryDataProviderService {

  constructor(private http: BaseHttpClientService, private transactionHistoryStoreService: TransactionHistoryService) { }

  getTransactionHistoryItems() {
    this.http.get<TransactionHistory[]>("history").subscribe((value) => {
      this.transactionHistoryStoreService.updateTransactionHistory(value);
    })
  }
}
