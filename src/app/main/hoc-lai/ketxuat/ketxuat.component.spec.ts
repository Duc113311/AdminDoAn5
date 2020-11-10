import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetxuatComponent } from './ketxuat.component';

describe('KetxuatComponent', () => {
  let component: KetxuatComponent;
  let fixture: ComponentFixture<KetxuatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KetxuatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KetxuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
