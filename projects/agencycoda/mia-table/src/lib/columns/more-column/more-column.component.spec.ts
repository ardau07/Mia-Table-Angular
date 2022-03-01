import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreColumnComponent } from './more-column.component';

describe('MoreColumnComponent', () => {
  let component: MoreColumnComponent;
  let fixture: ComponentFixture<MoreColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
