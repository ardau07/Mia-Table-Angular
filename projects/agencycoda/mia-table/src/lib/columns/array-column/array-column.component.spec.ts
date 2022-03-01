import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayColumnComponent } from './array-column.component';

describe('ArrayColumnComponent', () => {
  let component: ArrayColumnComponent;
  let fixture: ComponentFixture<ArrayColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
