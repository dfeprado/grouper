import { TestBed } from '@angular/core/testing';

import { GrpNavigatorService } from './grp-navigator.service';

describe('GrpNavigatorService', () => {
  let service: GrpNavigatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrpNavigatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
