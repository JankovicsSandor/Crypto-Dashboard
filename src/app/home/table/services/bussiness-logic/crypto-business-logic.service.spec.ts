import { TestBed } from '@angular/core/testing';

import { CryptoBusinessLogicService } from './crypto-business-logic.service';

describe('CryptoBusinessLogicService', () => {
  let service: CryptoBusinessLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoBusinessLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
