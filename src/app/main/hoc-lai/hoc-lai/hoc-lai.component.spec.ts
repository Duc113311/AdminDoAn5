import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HocLaiComponent } from './hoc-lai.component';

describe('HocLaiComponent', () => {
  let component: HocLaiComponent;
  let fixture: ComponentFixture<HocLaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HocLaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HocLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
