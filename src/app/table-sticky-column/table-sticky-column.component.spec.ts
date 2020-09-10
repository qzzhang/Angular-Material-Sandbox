import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyColumnComponent } from './table-sticky-column.component';

describe('TableStickyColumnComponent', () => {
  let component: TableStickyColumnComponent;
  let fixture: ComponentFixture<TableStickyColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStickyColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStickyColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
