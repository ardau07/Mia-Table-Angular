import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEditableColumnComponent } from './select-editable-column.component';

describe('SelectEditableColumnComponent', () => {
  let component: SelectEditableColumnComponent;
  let fixture: ComponentFixture<SelectEditableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEditableColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEditableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
