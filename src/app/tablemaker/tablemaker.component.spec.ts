import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TablemakerComponent } from './tablemaker.component';

describe('TablemakerComponent', () => {
  let component: TablemakerComponent;
  let fixture: ComponentFixture<TablemakerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablemakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablemakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
