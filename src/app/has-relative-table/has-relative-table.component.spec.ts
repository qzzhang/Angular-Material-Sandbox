import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasRelativeTableComponent } from './has-relative-table.component';

describe('HasRelativeTableComponent', () => {
  let component: HasRelativeTableComponent;
  let fixture: ComponentFixture<HasRelativeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasRelativeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasRelativeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
