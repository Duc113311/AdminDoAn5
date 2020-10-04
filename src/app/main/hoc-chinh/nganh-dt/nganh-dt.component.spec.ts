import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NganhDTComponent } from './nganh-dt.component';

describe('NganhDTComponent', () => {
  let component: NganhDTComponent;
  let fixture: ComponentFixture<NganhDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NganhDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NganhDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
