import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { TransactionHistoryStoreModel } from '@shared';


function createInitialState(): TransactionHistoryStoreModel {
  return new TransactionHistoryStoreModel()
}

@Injectable()
@StoreConfig({ name: 'history' })
export class TransactionHistoryStore extends Store<TransactionHistoryStoreModel> {

  constructor() {
    super(createInitialState());
  }

}
