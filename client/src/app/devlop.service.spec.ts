import { TestBed } from '@angular/core/testing';

import { DevlopService } from './devlop.service';

describe('DevlopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevlopService = TestBed.get(DevlopService);
    expect(service).toBeTruthy();
  });
});
