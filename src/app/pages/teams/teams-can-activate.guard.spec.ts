import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { teamsCanActivateGuard } from './teams-can-activate.guard';

describe('teamsCanActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => teamsCanActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
