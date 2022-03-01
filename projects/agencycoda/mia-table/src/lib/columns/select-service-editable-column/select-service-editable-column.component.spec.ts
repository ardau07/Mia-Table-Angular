import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServiceEditableColumnComponent } from './select-service-editable-column.component';

describe('SelectServiceEditableColumnComponent', () => {
  let component: SelectServiceEditableColumnComponent;
  let fixture: ComponentFixture<SelectServiceEditableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectServiceEditableColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectServiceEditableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
