import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOptionsColumnComponent } from './more-options-column.component';

describe('MoreOptionsColumnComponent', () => {
  let component: MoreOptionsColumnComponent;
  let fixture: ComponentFixture<MoreOptionsColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreOptionsColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOptionsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
