import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomColumnComponent } from './custom-column.component';

describe('CustomColumnComponent', () => {
  let component: CustomColumnComponent;
  let fixture: ComponentFixture<CustomColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
