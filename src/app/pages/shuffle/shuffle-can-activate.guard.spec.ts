import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { shuffleCanActivateGuard } from './shuffle-can-activate.guard';

describe('shuffleCanActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => shuffleCanActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
