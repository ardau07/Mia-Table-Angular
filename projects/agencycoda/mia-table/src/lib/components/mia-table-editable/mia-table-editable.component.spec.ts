import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiaTableEditableComponent } from './mia-table-editable.component';

describe('MiaTableEditableComponent', () => {
  let component: MiaTableEditableComponent;
  let fixture: ComponentFixture<MiaTableEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiaTableEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiaTableEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
