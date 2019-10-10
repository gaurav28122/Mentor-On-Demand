import { TestBed } from '@angular/core/testing';

import { AdminBlockService } from './admin-block.service';

describe('AdminBlockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminBlockService = TestBed.get(AdminBlockService);
    expect(service).toBeTruthy();
  });
});
