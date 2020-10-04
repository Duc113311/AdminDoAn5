import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiangDayComponent } from './giang-day.component';

describe('GiangDayComponent', () => {
  let component: GiangDayComponent;
  let fixture: ComponentFixture<GiangDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiangDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiangDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
