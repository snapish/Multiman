import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectmComponent } from './projectm.component';

describe('ProjectmComponent', () => {
  let component: ProjectmComponent;
  let fixture: ComponentFixture<ProjectmComponent>;

  beforeEach(waitForAsync(() => {
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
