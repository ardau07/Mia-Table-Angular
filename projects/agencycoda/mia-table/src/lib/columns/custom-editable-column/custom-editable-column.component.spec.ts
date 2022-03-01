import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEditableColumnComponent } from './custom-editable-column.component';

describe('CustomEditableColumnComponent', () => {
  let component: CustomEditableColumnComponent;
  let fixture: ComponentFixture<CustomEditableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEditableColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEditableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
