import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DKHocLaiComponent } from './dkhoc-lai.component';

describe('DKHocLaiComponent', () => {
  let component: DKHocLaiComponent;
  let fixture: ComponentFixture<DKHocLaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DKHocLaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DKHocLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
