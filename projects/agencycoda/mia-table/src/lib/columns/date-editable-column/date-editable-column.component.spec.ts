import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEditableColumnComponent } from './date-editable-column.component';

describe('DateEditableColumnComponent', () => {
  let component: DateEditableColumnComponent;
  let fixture: ComponentFixture<DateEditableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateEditableColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateEditableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
