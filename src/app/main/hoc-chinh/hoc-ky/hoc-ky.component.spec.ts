import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HocKyComponent } from './hoc-ky.component';

describe('HocKyComponent', () => {
  let component: HocKyComponent;
  let fixture: ComponentFixture<HocKyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HocKyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HocKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
