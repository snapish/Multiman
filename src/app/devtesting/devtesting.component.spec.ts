import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevtestingComponent } from './devtesting.component';

describe('DevtestingComponent', () => {
  let component: DevtestingComponent;
  let fixture: ComponentFixture<DevtestingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevtestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
