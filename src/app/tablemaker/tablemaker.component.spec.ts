import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablemakerComponent } from './tablemaker.component';

describe('TablemakerComponent', () => {
  let component: TablemakerComponent;
  let fixture: ComponentFixture<TablemakerComponent>;

  beforeEach(async(() => {
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
