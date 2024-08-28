import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunDistanceComponent } from './run-distance.component';

describe('RunDistanceComponent', () => {
  let component: RunDistanceComponent;
  let fixture: ComponentFixture<RunDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunDistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
