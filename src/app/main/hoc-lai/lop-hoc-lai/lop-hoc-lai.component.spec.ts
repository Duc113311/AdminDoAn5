import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopHocLaiComponent } from './lop-hoc-lai.component';

describe('LopHocLaiComponent', () => {
  let component: LopHocLaiComponent;
  let fixture: ComponentFixture<LopHocLaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopHocLaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LopHocLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
