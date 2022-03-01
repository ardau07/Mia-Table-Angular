import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEditableColumnComponent } from './remove-editable-column.component';

describe('RemoveEditableColumnComponent', () => {
  let component: RemoveEditableColumnComponent;
  let fixture: ComponentFixture<RemoveEditableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveEditableColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEditableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
