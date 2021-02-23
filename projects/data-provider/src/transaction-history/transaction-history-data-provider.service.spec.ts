import { TestBed } from '@angular/core/testing';

import { TransactionHistoryDataProviderService } from './transaction-history-data-provider.service';

describe('TransactionHistoryDataProviderService', () => {
  let service: TransactionHistoryDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionHistoryDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
