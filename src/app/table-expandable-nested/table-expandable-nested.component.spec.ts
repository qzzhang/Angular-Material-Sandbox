import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpandableNestedComponent } from './table-expandable-nested.component';

describe('TableExpandableNestedComponent', () => {
  let component: TableExpandableNestedComponent;
  let fixture: ComponentFixture<TableExpandableNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExpandableNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpandableNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
