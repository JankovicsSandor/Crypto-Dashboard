import { TestBed } from '@angular/core/testing';

import { UserProfileDataProviderService } from './user-profile-data-provider.service';

describe('UserProfileDataProviderService', () => {
  let service: UserProfileDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
