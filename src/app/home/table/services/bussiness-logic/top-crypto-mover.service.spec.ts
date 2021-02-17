import { TestBed } from '@angular/core/testing';

import { TopCryptoMoverService } from './top-crypto-mover.service';

describe('TopCryptoMoverService', () => {
  let service: TopCryptoMoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopCryptoMoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
