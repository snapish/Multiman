import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UltimateComponent } from './ultimate.component';

describe('UltimateComponent', () => {
  let component: UltimateComponent;
  let fixture: ComponentFixture<UltimateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
