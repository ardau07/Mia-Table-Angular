import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateColumnComponent } from './date-column.component';

describe('DateColumnComponent', () => {
  let component: DateColumnComponent;
  let fixture: ComponentFixture<DateColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
