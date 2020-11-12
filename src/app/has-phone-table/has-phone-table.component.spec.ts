import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasPhoneTableComponent } from './has-phone-table.component';

describe('HasPhoneTableComponent', () => {
  let component: HasPhoneTableComponent;
  let fixture: ComponentFixture<HasPhoneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasPhoneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasPhoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
