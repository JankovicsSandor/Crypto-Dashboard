import { TestBed } from '@angular/core/testing';

import { RedirectAuthUserGuard } from './redirect-auth-user.guard';

describe('RedirectAuthUserGuard', () => {
  let guard: RedirectAuthUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectAuthUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
