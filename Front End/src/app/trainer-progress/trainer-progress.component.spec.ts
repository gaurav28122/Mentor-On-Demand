import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProgressComponent } from './trainer-progress.component';

describe('TrainerProgressComponent', () => {
  let component: TrainerProgressComponent;
  let fixture: ComponentFixture<TrainerProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
