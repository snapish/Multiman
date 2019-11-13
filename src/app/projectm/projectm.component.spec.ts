import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmComponent } from './projectm.component';

describe('ProjectmComponent', () => {
  let component: ProjectmComponent;
  let fixture: ComponentFixture<ProjectmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
