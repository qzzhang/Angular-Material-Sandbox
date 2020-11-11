import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpandableStudentInfoComponent } from './table-expandable-student-info.component';

describe('TableExpandableStudentInfoComponent', () => {
  let component: TableExpandableStudentInfoComponent;
  let fixture: ComponentFixture<TableExpandableStudentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExpandableStudentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpandableStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
