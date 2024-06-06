import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { exploraGuard } from './explora.guard';

describe('exploraGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exploraGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
