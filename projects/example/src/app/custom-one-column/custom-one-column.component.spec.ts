import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOneColumnComponent } from './custom-one-column.component';

describe('CustomOneColumnComponent', () => {
  let component: CustomOneColumnComponent;
  let fixture: ComponentFixture<CustomOneColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOneColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOneColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
