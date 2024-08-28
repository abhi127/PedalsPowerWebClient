import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclingDistanceComponent } from './cycling-distance.component';

describe('CyclingDistanceComponent', () => {
  let component: CyclingDistanceComponent;
  let fixture: ComponentFixture<CyclingDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyclingDistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclingDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
