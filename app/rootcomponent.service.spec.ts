import { TestBed } from '@angular/core/testing';

import { RootComponentService } from './rootcomponent.service';

describe('RootcomponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RootComponentService = TestBed.get(RootComponentService);
    expect(service).toBeTruthy();
  });
});
