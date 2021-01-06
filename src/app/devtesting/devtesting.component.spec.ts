import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtestingComponent } from './devtesting.component';

describe('DevtestingComponent', () => {
  let component: DevtestingComponent;
  let fixture: ComponentFixture<DevtestingComponent>;

  beforeEach(async(() => {
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
