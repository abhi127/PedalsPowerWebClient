import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentuaryCyclingComponent } from './centuary-cycling.component';

describe('CentuaryCyclingComponent', () => {
  let component: CentuaryCyclingComponent;
  let fixture: ComponentFixture<CentuaryCyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentuaryCyclingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentuaryCyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
