import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAddRemoveShuffleColumnsComponent } from './table-add-remove-shuffle-columns.component';

describe('TableAddRemoveShuffleColumnsComponent', () => {
  let component: TableAddRemoveShuffleColumnsComponent;
  let fixture: ComponentFixture<TableAddRemoveShuffleColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAddRemoveShuffleColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAddRemoveShuffleColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
