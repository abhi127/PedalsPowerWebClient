import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclingTripComponent } from './cycling-trip.component';

describe('CyclingTripComponent', () => {
  let component: CyclingTripComponent;
  let fixture: ComponentFixture<CyclingTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyclingTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclingTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
