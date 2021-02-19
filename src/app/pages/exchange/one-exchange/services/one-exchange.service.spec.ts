import { TestBed } from '@angular/core/testing';

import { OneExchangeService } from './one-exchange.service';

describe('OneExchangeService', () => {
  let service: OneExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
