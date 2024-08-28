import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunWalkDistanceComponent } from './run-walk-distance.component';

describe('RunWalkDistanceComponent', () => {
  let component: RunWalkDistanceComponent;
  let fixture: ComponentFixture<RunWalkDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunWalkDistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunWalkDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
