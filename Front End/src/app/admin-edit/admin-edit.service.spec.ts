import { TestBed } from '@angular/core/testing';

import { AdminEditService } from './admin-edit.service';

describe('AdminEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminEditService = TestBed.get(AdminEditService);
    expect(service).toBeTruthy();
  });
});
