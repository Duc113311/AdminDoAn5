import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoMonComponent } from './bo-mon.component';

describe('BoMonComponent', () => {
  let component: BoMonComponent;
  let fixture: ComponentFixture<BoMonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoMonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoMonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
