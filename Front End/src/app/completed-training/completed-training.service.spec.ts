import { TestBed } from '@angular/core/testing';

import { CompletedTrainingService } from './completed-training.service';

describe('CompletedTrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletedTrainingService = TestBed.get(CompletedTrainingService);
    expect(service).toBeTruthy();
  });
});
