import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RushdownComponent } from './rushdown.component';

describe('RushdownComponent', () => {
  let component: RushdownComponent;
  let fixture: ComponentFixture<RushdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RushdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RushdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
