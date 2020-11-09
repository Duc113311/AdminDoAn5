import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvtruotComponent } from './svtruot.component';

describe('SvtruotComponent', () => {
  let component: SvtruotComponent;
  let fixture: ComponentFixture<SvtruotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvtruotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvtruotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
