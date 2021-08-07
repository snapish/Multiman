import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModesComponent } from './modes.component';

describe('ModesComponent', () => {
  let component: ModesComponent;
  let fixture: ComponentFixture<ModesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
