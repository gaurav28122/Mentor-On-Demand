import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTrainingMentorComponent } from './completed-training-mentor.component';

describe('CompletedTrainingMentorComponent', () => {
  let component: CompletedTrainingMentorComponent;
  let fixture: ComponentFixture<CompletedTrainingMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTrainingMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTrainingMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
