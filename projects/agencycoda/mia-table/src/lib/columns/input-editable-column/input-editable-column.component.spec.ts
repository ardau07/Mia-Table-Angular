import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEditableColumnComponent } from './input-editable-column.component';

describe('InputEditableColumnComponent', () => {
  let component: InputEditableColumnComponent;
  let fixture: ComponentFixture<InputEditableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEditableColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEditableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
