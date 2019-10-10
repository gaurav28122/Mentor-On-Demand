import { TestBed } from '@angular/core/testing';

import { CompletedTrainingMentorService } from './completed-training-mentor.service';

describe('CompletedTrainingMentorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletedTrainingMentorService = TestBed.get(CompletedTrainingMentorService);
    expect(service).toBeTruthy();
  });
});
