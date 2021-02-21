import { TestBed } from '@angular/core/testing';

import { CryptoNewsDataProviderService } from './crypto-news-data-provider.service';

describe('CryptoNewsDataProviderService', () => {
  let service: CryptoNewsDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoNewsDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
