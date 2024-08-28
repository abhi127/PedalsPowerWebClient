import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkDistanceComponent } from './walk-distance.component';

describe('WalkDistanceComponent', () => {
  let component: WalkDistanceComponent;
  let fixture: ComponentFixture<WalkDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkDistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
