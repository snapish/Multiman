import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConnectFourComponent } from './connect-four.component';

describe('ConnectFourComponent', () => {
  let component: ConnectFourComponent;
  let fixture: ComponentFixture<ConnectFourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
